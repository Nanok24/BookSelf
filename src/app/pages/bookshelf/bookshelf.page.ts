import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";
import firebase from "firebase";
import { AuthenticationService } from "src/app/services/authentication.service";
import {
  Bookshelf,
  FirestoreService,
} from "src/app/services/firestore.service";
import { AddBookshelfComponent } from "./add-bookshelf/add-bookshelf.component";
import User = firebase.User;

@Component({
  selector: "app-bookshelf",
  templateUrl: "./bookshelf.page.html",
  styleUrls: ["./bookshelf.page.scss"],
})
export class BookshelfPage {
  public booksShelves: Bookshelf[] = [];
  public userId: string;
  public displayName: string;
  public userData: any;

  constructor(
    public authService: AuthenticationService,
    public modalController: ModalController,
    public afs: FirestoreService,
    public afAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private router: Router,
    private navCtrl: NavController
  ) {}

  ionViewWillEnter() {
    const user = JSON.parse(localStorage.getItem("user")) as User;

    if (user) {
      this.userData = user;
      this.userId = user.uid;
      this.displayName = localStorage.getItem("currentUserDisplayName");
      this.angularFirestore
        .collection("bookshelfs")
        .snapshotChanges()
        .subscribe((books) => {
          this.booksShelves = books
            .map((t) => ({
              id: t.payload.doc.id,
              ...(t.payload.doc.data() as Bookshelf),
            }))
            .map(
              (book) =>
                ({
                  id: book.id,
                  userId: book.userId,
                  name: book.name,
                } as Bookshelf)
            )
            .filter((t) => t.userId === this.userId);
        });
    }
  }

  public async goToBookList(bookShelfId: number) {
    await this.router.navigate(["book-list", bookShelfId]);
  }

  public async signOut(): Promise<void> {
    await this.navCtrl.navigateRoot("/login");
    await this.authService.signOut();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddBookshelfComponent,
      cssClass: "modalCss",
      componentProps: {
        userId: this.userId,
      },
    });
    return await modal.present();
  }

  deleteBookshelf(bookShelfId: string): Promise<void> {
    return this.angularFirestore.doc(`bookshelfs/${bookShelfId}`).delete();
  }
}
