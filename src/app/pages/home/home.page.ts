import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit, OnDestroy {
  result = null;
  scanActive = false;

  constructor(private alertController: AlertController) {}

  ngAfterViewInit() {
    BarcodeScanner.prepare();
  }

  ngOnDestroy() {
    BarcodeScanner.stopScan();
  }

  async startScanner() {
    const allowed = await this.checkPermission();
    if (allowed) {
      this.scanActive = true;
      document.body.classList.add('qrscanner'); // add the qrscanner class to body
      BarcodeScanner.hideBackground();
      const result = await BarcodeScanner.startScan();
      document.body.classList.remove('qrscanner'); // remove the qrscanner from the body

      if (result.hasContent) {
        this.result = result.content;
        this.scanActive = false;
      }
    }
  }
  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        const alert = await this.alertController.create({
          header: 'No permission',
          message: 'Please allow camera access in your settings',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
            },
            {
              text: 'Open Settings',
              handler: () => {
                resolve(false);
                BarcodeScanner.openAppSettings();
              },
            },
          ],
        });

        await alert.present();
      } else {
        resolve(false);
      }
    });
  }
  stopScanner() {
    document.body.classList.remove('qrscanner'); // remove the qrscanner from the body
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }
}
