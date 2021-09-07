import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { mergeMap } from "rxjs/operators";
import {
  Book,
  Bookshelf,
  FirestoreService,
} from "../../services/firestore.service";
import { User } from "../../shared/auth";

@Component({
  selector: "app-book-search",
  templateUrl: "./book-search.page.html",
  styleUrls: ["./book-search.page.scss"],
})
export class BookSearchPage implements OnInit {
  public booksShelves: Bookshelf[];
  public books: Book[];
  public searchTerm: string;

  constructor(
    public afs: FirestoreService,
    public afAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore
  ) {}

  public ngOnInit(): void {}

  ionViewWillEnter() {
    const user = JSON.parse(localStorage.getItem("user")) as User;

    if (user) {
      this.angularFirestore
        .collection("bookshelfs")
        .snapshotChanges()
        .pipe(
          mergeMap((booksShelves) => {
            this.booksShelves = booksShelves
              .map((t) => ({
                id: t.payload.doc.id,
                ...(t.payload.doc.data() as Bookshelf),
              }))
              .filter((t) => t.userId === user.uid);

            return this.angularFirestore.collection("books").snapshotChanges();
          })
        )
        .subscribe((books) => {
          const unfilteredBooks = books.map((t) => ({
            id: t.payload.doc.id,
            ...(t.payload.doc.data() as Book),
          }));
          this.books = unfilteredBooks.filter((t) =>
            this.booksShelves.map((x) => x.id).includes(t.bookShelfId)
          );
        });
    }
  }
}
