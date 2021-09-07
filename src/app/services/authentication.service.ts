import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Router } from "@angular/router";

import firebase from "firebase/app";
import "firebase/auth";
import { BehaviorSubject } from "rxjs";
import { User } from "src/app/shared/auth";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  public userData: any;
  public name: string;
  public isEmailVerified: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public currentUserDisplayName: string;

  constructor(
    public afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem("user", JSON.stringify(this.userData));
        this.isEmailVerified.next(user.emailVerified);

        this.afStore
          .collection("users")
          .snapshotChanges()
          .subscribe((reviews) => {
            this.currentUserDisplayName = reviews
              .map((t) => ({
                id: t.payload.doc.id,
                ...(t.payload.doc.data() as User),
              }))
              .filter((t) => t.uid === user.uid)[0].displayName;

            localStorage.setItem(
              "currentUserDisplayName",
              this.currentUserDisplayName
            );
          });
      }
    });
  }

  login(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  registerUser(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async sendVerificationEmail() {
    return await (await this.afAuth.currentUser)
      .sendEmailVerification()
      .then(() => {
        this.router.navigate(["verify-email"]);
      });
  }

  passwordRecover(passwordResetEmail) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          "Password reset email has been sent, please check your inbox."
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null || user === undefined) return false;
  }

  // get isEmailVerified(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return user.emailVerified !== false;
  // }

  setUserData(user: firebase.User, displayName?: string) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
    if (displayName) {
      const userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: displayName,
      };

      return userRef.set(userData, { merge: true });
    } else {
      const userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };

      return userRef.set(userData, { merge: true });
    }
  }

  authLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(["home"]);
        });
        this.setUserData(result.user, result.user.displayName);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  googleAuth() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }

  testGoogle() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // async googleSignIn() {
  //   let googleUser = await GoogleAuth.signIn();
  //   const credential = firebase.auth.GoogleAuthProvider.credential(
  //     googleUser.authentication.idToken
  //   );
  //   return this.afAuth.signInAndRetrieveDataWithCredential(credential);
  // }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.clear();
      this.router.navigate(["login"]);
    });
  }
}
