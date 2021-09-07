import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      displayName: ['', [Validators.required, Validators.minLength(3)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
    }
  }

  signUp(email, password, displayName) {
    this.authService
      .registerUser(email.value, password.value)
      .then((res) => {
        this.authService.setUserData(res.user, displayName.value);
        this.authService.sendVerificationEmail();
      })
      .catch((error) => {
        const alert = this.alertController.create({
          header: 'Sign up failed',
          message: error.message,
          buttons: ['OK'],
        });
      });
  }
}
