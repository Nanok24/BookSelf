import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { ModalController, NavParams } from "@ionic/angular";
import { Toast } from "@capacitor/toast";

@Component({
  selector: "app-add-book-modal",
  templateUrl: "./add-book-modal.component.html",
  styleUrls: ["./add-book-modal.component.scss"],
})
export class AddBookModalComponent implements OnInit {
  public bookshelfId;
  public title: string;
  public authors: string;
  public publishers: string;
  public publishDate: Date;
  public numberOfPages: number;
  public isbn: string;
  public cover: string;
  public customPickerOptions: any;

  constructor(
    public navParams: NavParams,
    public modalController: ModalController,
    private angularFirestore: AngularFirestore
  ) {
    this.bookshelfId = this.navParams.get("bookShelfId");
  }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [
        {
          text: "Cancel",
          handler: () => {
            console.log("Clicked Log. Do not Dismiss.");
            return false;
          },
        },
        {
          text: "Save",
          handler: (data) => {
            console.log(data);
            this.changePublishDate(data);
          },
        },
      ],
    };
  }

  public changeTitle(title: any): void {
    this.title = title.target.value;
  }

  public changeAuthors(authors: any): void {
    this.authors = authors.target.value;
  }

  public changePublishers(publishers: any): void {
    this.publishers = publishers.target.value;
  }

  public changePublishDate(publishDate: any): void {
    this.publishDate = publishDate.target.value;
  }

  public changeNumberOfPages(numberOfPages: any): void {
    this.numberOfPages = numberOfPages.target.value;
  }

  public changeIsbn(name: any): void {
    this.isbn = name.target.value;
  }

  async closeModal() {
    const close = "Modal Removed";
    await this.modalController.dismiss(close);
  }

  save() {
    this.angularFirestore
      .collection("books")
      .add({
        bookShelfId: this.bookshelfId,
        title: this.title,
        authors: this.authors,
        publishers: this.publishers,
        publish_date: this.publishDate,
        number_of_pages: this.numberOfPages,
        cover: "./assets/icon/bookCard.svg",
        isbn: this.isbn,
        createdAt: new Date(),
      })
      .then(async () => {
        const close = "Modal Removed";
        Toast.show({
          text: "Book was successfully added to your bookshelf!",
        });
        await this.modalController.dismiss(close);
      })
      .catch((err) => console.log(err));
  }
}
