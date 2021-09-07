import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AppLauncher } from '@capacitor/app-launcher';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage {
  constructor(
    public authService: AuthenticationService,
    public alertController: AlertController
  ) {}

  async openGmail() {
    const { value } = await AppLauncher.canOpenUrl({
      url: 'com.google.android.gm',
    });
    if (value) {
      await AppLauncher.openUrl({ url: 'com.google.android.gm' });
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: "Couldn't open/find Gmail app",
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
