import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import firebase from 'firebase/app';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Users {
  uid: string;
  displayName: string;
}

export interface Bookshelf {
  id: string;
  userId: string;
  name: string;
}

export interface Book {
  id?: string;
  authors?: string;
  cover?: string;
  isbn?: string;
  number_of_pages?: string;
  publish_date?: string;
  publishers?: string;
  title?: string;
  bookShelfId: string;
  createdAt: Date;
}

export interface Stars {
  booksID: string;
  userID: string;
  text: string;
  rating: number;
  createdAt: firebase.firestore.FieldValue;
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  currentUser: Users = null;
  currentReview: Stars = null;
  usersCollection: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;

  constructor(
    public afAuth: AngularFireAuth,
    public afStore: AngularFirestore
  ) {
    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
  }

  // getBooks() {
  //   this.afStore
  //     .collection('books')
  //     .get()
  //     .forEach((el) => {
  //       console.log(el);
  //     });
  // }

  // Asta functioneaza, daca tu ai alta modalitate, poti sa o modifici schimbi
  addBook(book: Book) {
    return this.afStore.collection('books').add({
      authors: book.authors,
      cover: book.cover,
      isbn: book.isbn,
      number_of_pages: book.number_of_pages,
      publish_date: book.publish_date,
      publishers: book.publishers,
      title: book.title,
      bookShelfId: book.bookShelfId,
      createdAt: book.createdAt
    });
  }
}
