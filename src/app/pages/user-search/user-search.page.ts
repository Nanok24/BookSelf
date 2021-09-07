import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../../shared/auth';

@Component({
  selector: 'app-user-search.page',
  templateUrl: './user-search.page.html',
  styleUrls: ['./user-search.page.scss']
})
export class UserSearchPage implements OnInit {
  public bookShelves: User[];
  public users: User[];
  public filtered: User[];
  public searchTerm: string;

  constructor(
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
  }

  ionViewWillEnter() {
    this.angularFirestore
      .collection('users')
      .snapshotChanges()
      .pipe()
      .subscribe((users) => {
        this.users = users
          .map((t) => ({
            id: t.payload.doc.id,
            ...t.payload.doc.data() as User
          }));
      });
  }

  public changeSearchCriteria(searchTerm: string): void {
    this.filtered = this.users.filter(t => searchTerm !== '' && t.displayName.includes(searchTerm));
  }

  public async goToUser(userId: string): Promise<void> {
    await this.router.navigate(['user-bookshelves', userId]);
  }
}
