import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import {
  AlertController,
  ModalController,
  PickerController,
  PickerOptions,
} from "@ionic/angular";
import { Subscription } from "rxjs";
import {
  Book,
  Bookshelf,
  FirestoreService,
} from "../../services/firestore.service";
import { User } from "../../shared/auth";
import { AddBookModalComponent } from "../bookshelf/add-book-modal/add-book-modal.component";
import { Toast } from "@capacitor/toast";

@Component({
  selector: "app-scanner",
  templateUrl: "./scanner.page.html",
  styleUrls: ["./scanner.page.scss"],
})
export class ScannerPage implements AfterViewInit, OnDestroy {
  public booksShelves: Bookshelf[];
  public selectBookShelfTitle = "Select bookshelf";
  result = null;
  resultHasContent = false;
  scanActive = false;
  title = null;
  authors = null;
  publishers = null;
  publish_date = null;
  number_of_pages = null;
  cover = null;
  isbn = null;
  bookShelfId: string = null;

  currentBook: Book = {
    title: this.title,
    authors: this.authors,
    publishers: this.publishers,
    publish_date: this.publish_date,
    number_of_pages: this.number_of_pages,
    cover: this.cover,
    isbn: this.isbn,
    bookShelfId: this.bookShelfId,
    createdAt: new Date(),
  };

  public subscriptions: Subscription = new Subscription();

  constructor(
    private alertController: AlertController,
    private angularFirestore: AngularFirestore,
    private afs: FirestoreService,
    private pickerController: PickerController,
    private modalController: ModalController
  ) {}

  ngAfterViewInit() {
    BarcodeScanner.prepare();
  }

  ngOnDestroy() {
    BarcodeScanner.stopScan();
    this.subscriptions.unsubscribe();
  }

  ionViewWillEnter() {
    this.result = null;
    this.resultHasContent = false;

    this.title = null;
    this.authors = null;
    this.publishers = null;
    this.publish_date = null;
    this.number_of_pages = null;
    this.cover = null;
    this.isbn = null;

    const user = JSON.parse(localStorage.getItem("user")) as User;

    if (user) {
      const sub = this.angularFirestore
        .collection("bookshelfs")
        .snapshotChanges()
        .subscribe((bookshelfs) => {
          this.booksShelves = bookshelfs
            .map((t) => ({
              id: t.payload.doc.id,
              ...(t.payload.doc.data() as Bookshelf),
            }))
            .map(
              (bookshelf) =>
                ({
                  id: bookshelf.id,
                  userId: bookshelf.userId,
                  name: bookshelf.name,
                } as Bookshelf)
            )
            .filter((t) => t.userId === user.uid);
        });
      this.subscriptions.add(sub);
    }
  }

  async showPicker() {
    const options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Ok",
          handler: (value: any) => {
            this.selectBookShelfTitle = value.Bookshelfs.text;
            this.bookShelfId = value.Bookshelfs.value;
          },
        },
      ],
      columns: [
        {
          name: "Bookshelfs",
          options: this.getColumnOptions(),
        },
      ],
    };

    const picker = await this.pickerController.create(options);
    picker.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddBookModalComponent,
      cssClass: "modalCss",
      componentProps: {
        bookShelfId: this.bookShelfId,
      },
    });
    return await modal.present();
  }

  getColumnOptions() {
    const options = [];
    this.booksShelves.forEach((x) => {
      options.push({ text: x.name, value: x.id });
    });
    return options;
  }

  async selectBookShelf() {
    await this.showPicker();
  }

  async startScanner() {
    this.title = null;
    this.authors = null;
    this.publishers = null;
    this.publish_date = null;
    this.number_of_pages = null;
    this.cover = null;
    this.isbn = null;

    const allowed = await this.checkPermission();
    if (allowed) {
      this.scanActive = true;
      document.body.classList.add("qrscanner"); // add the qrscanner class to body
      BarcodeScanner.hideBackground();
      const result = await BarcodeScanner.startScan();
      document.body.classList.remove("qrscanner"); // remove the qrscanner from the body

      if (result.hasContent) {
        this.result = result.content;
        this.resultHasContent = true;
        this.scanActive = false;
        this.isbn = this.result;
        const response = await fetch(
          "https://openlibrary.org/api/books?bibkeys=ISBN:" +
            this.result +
            "&jscmd=data&format=json"
        );
        const data = await response.json();
        //Title of the book
        this.title = data["ISBN:" + this.result].title;
        //Authors, implementation for multiple
        this.authors = data["ISBN:" + this.result].authors[0].name;
        for (
          let index = 1;
          index < data["ISBN:" + this.result].authors.length;
          index++
        ) {
          this.authors =
            this.authors +
            " " +
            data["ISBN:" + this.result].authors[index].name +
            " ";
        }

        //Publisher
        this.publishers = data["ISBN:" + this.result].publishers[0].name;

        //Publish date
        this.publish_date = data["ISBN:" + this.result].publish_date;

        //Number of pages
        if (data["ISBN:" + this.result].number_of_pages !== undefined) {
          this.number_of_pages = data["ISBN:" + this.result].number_of_pages;
        } else {
          this.number_of_pages = "";
        }
        //Book cover
        if (data["ISBN:" + this.result].hasOwnProperty("cover")) {
          this.cover = data["ISBN:" + this.result].cover.medium;
        } else {
          this.cover = "./assets/icon/bookCoverError.svg";
        }

        this.currentBook.authors = this.authors;
        this.currentBook.cover = this.cover;
        this.currentBook.isbn = this.isbn;
        this.currentBook.number_of_pages = this.number_of_pages;
        this.currentBook.publish_date = this.publish_date;
        this.currentBook.publishers = this.publishers;
        this.currentBook.title = this.title;
        this.currentBook.bookShelfId = this.bookShelfId;
        this.currentBook.createdAt = new Date();
      }
    }
  }

  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        const alert = await this.alertController.create({
          header: "No permission",
          message: "Please allow camera access in your settings",
          buttons: [
            {
              text: "No",
              role: "cancel",
            },
            {
              text: "Open Settings",
              handler: () => {
                resolve(false);
                BarcodeScanner.openAppSettings();
              },
            },
          ],
        });

        await alert.present();
      } else {
        resolve(false);
      }
    });
  }

  stopScanner() {
    document.body.classList.remove("qrscanner"); // remove the qrscanner from the body
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }

  public async addBook(): Promise<void> {
    await this.afs.addBook(this.currentBook);
    Toast.show({
      text: "Book was successfully added to your bookshelf!",
    });
  }
}
