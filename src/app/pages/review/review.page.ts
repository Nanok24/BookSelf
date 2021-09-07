import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { User } from "../../shared/auth";

export interface Review {
  id: string;
  userId: string;
  booksID: string;
  rating: number;
  bookAuthors: string;
  text: string;
  title: string;
  cover: string;
}

@Component({
  selector: "app-review",
  templateUrl: "./review.page.html",
  styleUrls: ["./review.page.scss"],
})
export class ReviewPage {
  public reviews: Review[] = [];
  public userId: string;
  public displayName: string;

  constructor(private angularFirestore: AngularFirestore) {}

  ionViewWillEnter() {
    const user = JSON.parse(localStorage.getItem("user")) as User;
    if (user) {
      this.userId = user.uid;
      this.displayName = localStorage.getItem("currentUserDisplayName");

      this.angularFirestore
        .collection("stars")
        .snapshotChanges()
        .subscribe((reviews) => {
          this.reviews = reviews
            .map((t) => ({
              id: t.payload.doc.id,
              ...(t.payload.doc.data() as Review),
            }))
            .filter((t) => t.userId === this.userId);
        });
    }
  }

  public delete(): void {
    this.angularFirestore
      .collection("stars")
      .snapshotChanges()
      .subscribe((reviews) => {
        this.reviews = reviews.map((t) => ({
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Review),
        }));
      });
  }

  deleteReview(reviewId: string): Promise<void> {
    return this.angularFirestore.doc(`stars/${reviewId}`).delete();
  }
}
