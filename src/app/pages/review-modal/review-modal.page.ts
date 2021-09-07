import { Component, Input, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { ModalController, NavParams } from "@ionic/angular";
import { Toast } from "@capacitor/toast";

@Component({
  selector: "app-review-modal",
  templateUrl: "./review-modal.page.html",
  styleUrls: ["./review-modal.page.scss"],
})
export class ReviewModalPage implements OnInit {
  @Input() bookTitle: string;

  public rating: number;
  public description: string;
  public bookAuthors: string;
  public cover: string;
  public title: string;
  private userId: any;
  private bookId: string;

  constructor(
    public navParams: NavParams,
    public modalController: ModalController,
    private angularFirestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.bookTitle = this.navParams.get("bookTitle");
    this.bookAuthors = this.navParams.get("bookAuthors");
    this.userId = this.navParams.get("userId");
    this.bookId = this.navParams.get("bookId");
    this.cover = this.navParams.get("cover");
    this.title = this.navParams.get("title");
  }

  public changeRating(rating: any): void {
    this.rating = parseFloat(rating.target.value);
  }

  public changeDescription(description: any): void {
    this.description = description.target.value;
  }

  // closeModal() {
  //   const close = "Modal Removed";
  //   this.modalController.dismiss(close).then(() => {});

  //   this.angularFirestore
  //     .collection("stars")
  //     .add({
  //       title: this.bookTitle,
  //       rating: this.rating,
  //       text: this.description,
  //       userId: this.userId,
  //       bookId: this.bookId,
  //       cover: this.cover,
  //       bookAuthors: this.bookAuthors,
  //     })
  //     .then(() => {})
  //     .catch((error) => console.log(error));
  //   Toast.show({
  //     text: "Review was created successfully!",
  //   });
  // }

  public async closeModal(): Promise<void> {
    const close = "Modal Removed";
    await this.modalController.dismiss(close);
  }

  async save() {
    this.angularFirestore
      .collection("stars")
      .add({
        title: this.bookTitle,
        rating: this.rating,
        text: this.description,
        userId: this.userId,
        bookId: this.bookId,
        cover: this.cover,
        bookAuthors: this.bookAuthors,
      })
      .then(async () => {
        const close = "Modal Removed";
        Toast.show({
          text: "Review was created successfully!",
        });
        await this.modalController.dismiss(close);
      })
      .catch((err) => console.log(err));
  }
}
