import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from '../../../services/authentication.service';
import { Book, FirestoreService, Users } from '../../../services/firestore.service';
import { ReviewModalPage } from '../../review-modal/review-modal.page';

@Component({
  selector: 'app-bookshelf-book-list',
  templateUrl: './bookshelf-book-list.component.html',
  styleUrls: ['./bookshelf-book-list.component.scss']
})
export class BookshelfBookListComponent implements OnInit {
  public displayName = null;
  public uid = null;
  public usersCollection: AngularFirestoreCollection<Users>;
  public books: Book[] = [];

  private readonly bookShelfId: string;

  constructor(
    public authService: AuthenticationService,
    public modalController: ModalController,
    public afs: FirestoreService,
    public afAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private route: ActivatedRoute
  ) {
    this.bookShelfId = this.route.snapshot.paramMap.get('id');

    afAuth.authState.subscribe((user) => {
      if(user) {
        this.uid = user.uid;
        this.displayName = localStorage.getItem('currentUserDisplayName');
      }
    });
  }

  // Aici e tot ce am incercat eu pe parcurs pentru afisare, ceva de aici functioneaza, dar nu cum imi doresc

  ngOnInit() {
    this.angularFirestore.collection('books').snapshotChanges().subscribe((books) => {
      this.books = books.map((t) => ({
        id: t.payload.doc.id,
        ...t.payload.doc.data() as Book
      })).filter(t => t.bookShelfId === this.bookShelfId).sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    });
    // this.user$ = this.afs.afStore
    //   .collection('users', (ref) => ref.where('uid', '==', this.uid))
    //   .valueChanges();
  }

  ionViewDidLoad() {

  }

  ionViewWillEnter() {
    // this.user$ = this.afs.afStore
    //   .collection('users', (ref) => ref.where('uid', '==', this.uid))
    //   .valueChanges();
    // this.books$ = this.afs.afStore.collection('books').valueChanges();
    // this.docs$ = this.afs.afStore
    //   .collection('bookshelfs', (ref) =>
    //     ref.where('userID', '==', this.uid).orderBy('createdAt', 'desc')
    //   )
    //   .valueChanges();
    // console.log(
    //   '🚀 ~ file: bookshelf.page.ts ~ line 79 ~ BookshelfPage ~ ionViewWillEnter ~ docs$',
    //   this.docs$
    // );
    // const testare = this.afs.afStore
    //   .collection('bookshelfs', (ref) =>
    //     ref.where('userID', '==', this.uid).orderBy('createdAt', 'desc')
    //   )
    //   .valueChanges();
    // testare.forEach((el) => {
    //   for (let index = 0; index < el.length; index++) {
    //     console.log(el[index]);
    //   }
    //   console.log(el);
    // });
    // const queryObservable = this.test$.pipe(
    //   switchMap((test) =>
    //     this.afs.afStore
    //       .collection('users', (ref) => ref.where('uid', '==', test))
    //       .valueChanges()
    //   )
    // );
    // queryObservable.subscribe((queriedItems) => {
    //   console.log(queriedItems);
    // });
  }

  async openModal(book: Book) {
    const modal = await this.modalController.create({
      component: ReviewModalPage,
      cssClass: 'modalCss',
      componentProps: {
        bookTitle: book.title,
        bookAuthors: book.authors,
        userId: this.uid,
        bookId: book.id,
        cover: book.cover,
        title: book.title
      }
    });

    modal.present();
  }

  deleteBook(bookId: string): Promise<void> {
    return this.angularFirestore.doc(`books/${bookId}`).delete();
  }
}
