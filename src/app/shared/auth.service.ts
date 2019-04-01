import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class AuthService {

  loginForm: FormGroup
  public user: Observable<firebase.User>

  constructor( private angularFireAuth: AngularFireAuth, private router: Router) { }

  signUp(email, password) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email, password) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then(
      (result) => {
         this.router.navigate(['/products']);
      });
  }

  signOut() {
    return this.angularFireAuth.auth.signOut().then(
      () => {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    })
  }

}
