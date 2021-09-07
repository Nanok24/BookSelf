import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add-bookshelf',
  templateUrl: './add-bookshelf.component.html',
  styleUrls: ['./add-bookshelf.component.scss']
})
export class AddBookshelfComponent implements OnInit {
  @Input() bookTitle: string;

  public name: string;
  public description: string;
  public bookAuthors: string;

  private userId: any;

  constructor(
    public navParams: NavParams,
    public modalController: ModalController,
    private angularFirestore: AngularFirestore
  ) {
  }

  ngOnInit() {
    this.userId = this.navParams.get('userId');
  }

  public changeName(name: any): void {
    this.name = name.target.value;
  }

  public changeDescription(description: any): void {
    this.description = description.target.value;
  }

  public async closeModal(): Promise<void> {
    const close = 'Modal Removed';
    await this.modalController.dismiss(close);
  }

  async save() {
    this.angularFirestore
      .collection('bookshelfs')
      .add({
        name: this.name,
        userId: this.userId,
        createdAt: new Date()
      })
      .then(async() => {
        const close = 'Modal Removed';
        await this.modalController.dismiss(close);
      })
      .catch(err => console.log(err));
  }
}
