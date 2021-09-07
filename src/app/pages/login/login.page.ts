import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Toast } from "@capacitor/toast";
import { NavController } from "@ionic/angular";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}

  logIn(email, password) {
    this.authService
      .login(email.value, password.value)
      .then((res) => {
        this.authService.isEmailVerified.subscribe((emailVerified) => {
          if (emailVerified) {
            this.router.navigate(["home"]);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  recoverPassword(email) {
    this.authService.passwordRecover(email.value).then((res) => {
      Toast.show({
        text: "Password reset email has been sent, please check your inbox!",
      });
    });
  }
}
