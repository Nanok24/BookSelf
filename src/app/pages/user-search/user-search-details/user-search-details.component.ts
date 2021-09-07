import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { AuthenticationService } from '../../../services/authentication.service';
import { Bookshelf } from '../../../services/firestore.service';
import { Review } from '../../review/review.page';
import { UserSearchBookListComponent } from '../user-search-book-list/user-search-book-list.component';

@Component({
  selector: 'app-user-search-details',
  templateUrl: './user-search-details.component.html',
  styleUrls: ['./user-search-details.component.scss']
})
export class UserSearchDetailsComponent {
  public userId: string;
  public booksShelves: Bookshelf[];
  public reviews: Review[];
  public displayName: string;
  public segment = 'bookshelves';

  constructor(
    public authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private angularFirestore: AngularFirestore,
    private router: Router,
    private navCtrl: NavController,
    private modalController: ModalController
  ) {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    this.displayName = localStorage.getItem('currentUserDisplayName');

    this.angularFirestore.collection('bookshelfs').snapshotChanges().subscribe((books) => {
      this.booksShelves = books
        .map((t) => ({
          id: t.payload.doc.id,
          ...t.payload.doc.data() as Bookshelf
        }))
        .filter(t => t.userId === this.userId);
    });

    this.angularFirestore.collection('stars').snapshotChanges().subscribe((review) => {
      this.reviews = review
        .map((t) => ({
          id: t.payload.doc.id,
          ...t.payload.doc.data() as Review
        }))
        .filter(t => t.userId === this.userId);
    });
  }

  public async presentModal(bookShelf: Bookshelf): Promise<void> {
    const modal = await this.modalController.create({
      component: UserSearchBookListComponent,
      componentProps: {
        bookshelfId: bookShelf.id,
        title: bookShelf.name
      }
    });
    return await modal.present();
  }

  public segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

  public async signOut(): Promise<void> {
    await this.navCtrl.navigateRoot('/login');
    await this.authService.signOut();
  }
}
