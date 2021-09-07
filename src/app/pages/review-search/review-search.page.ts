import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { mergeMap } from 'rxjs/operators';
import { Book, Bookshelf, FirestoreService } from '../../services/firestore.service';
import { User } from '../../shared/auth';
import { Review } from '../review/review.page';

@Component({
  selector: 'app-review-search',
  templateUrl: './review-search.page.html',
  styleUrls: ['./review-search.page.scss']
})
export class ReviewSearchPage implements OnInit {
  public booksShelves: Bookshelf[];
  public books: Book[];
  public reviews: Review[];
  public searchTerm: string;

  constructor(
    public afs: FirestoreService,
    public afAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore
  ) {
  }

  public ngOnInit(): void {
  }

  ionViewWillEnter() {
    const user = JSON.parse(localStorage.getItem('user')) as User;

    if(user) {
      this.angularFirestore.collection('bookshelfs').snapshotChanges().pipe(
        mergeMap((booksShelves) => {
          this.booksShelves = booksShelves
            .map((t) => ({
              id: t.payload.doc.id,
              ...t.payload.doc.data() as Bookshelf
            }))
            .filter(t => t.userId === user.uid);

          return this.angularFirestore.collection('books').snapshotChanges();
        }),
        mergeMap((books) => {
          const unfilteredBooks = books
            .map((t) => ({
              id: t.payload.doc.id,
              ...t.payload.doc.data() as Book
            }));
          this.books = unfilteredBooks.filter(t => this.booksShelves.map(x => x.id).includes(t.bookShelfId));

          return this.angularFirestore.collection('stars').snapshotChanges();
        })
      ).subscribe((reviews) => {
        const unfilteredReviews = reviews
          .map((t) => ({
            id: t.payload.doc.id,
            ...t.payload.doc.data() as Review
          }));
        this.reviews = unfilteredReviews.filter(t => this.books.map(x => x.id).includes((t as any).bookId));
      });
    }
  }
}
