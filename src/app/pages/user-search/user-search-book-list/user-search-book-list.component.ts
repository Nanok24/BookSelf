import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { AuthenticationService } from '../../../services/authentication.service';
import { Book } from '../../../services/firestore.service';

@Component({
  selector: 'app-user-search-book-list',
  templateUrl: './user-search-book-list.component.html',
  styleUrls: ['./user-search-book-list.component.scss']
})
export class UserSearchBookListComponent {
  public displayName: string;
  public bookShelfId: string;
  public title: string;
  public books: Book[];

  constructor(
    public authService: AuthenticationService,
    private navParams: NavParams,
    private angularFirestore: AngularFirestore,
    private router: Router,
    private navCtrl: NavController,
    private modalController: ModalController
  ) {
    this.bookShelfId = this.navParams.get('bookshelfId');
    this.title = this.navParams.get('title');
  }

  ionViewWillEnter() {
    this.displayName = localStorage.getItem('currentUserDisplayName');

    this.angularFirestore.collection('books').snapshotChanges().subscribe((books) => {
      this.books = books
        .map((t) => ({
          id: t.payload.doc.id,
          ...t.payload.doc.data() as Book
        }))
        .filter(t => t.bookShelfId === this.bookShelfId);
    });
  }

  public async signOut(): Promise<void> {
    await this.navCtrl.navigateRoot('/login');
    await this.authService.signOut();
  }

  public async closeModal(): Promise<void> {
    const close = 'Modal Removed';
    await this.modalController.dismiss(close);
  }
}
