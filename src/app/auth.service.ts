import { Injectable } from '@angular/core';
//import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Observable, BehaviorSubject, of} from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import { User } from '@app/core/roles';
import { switchMap } from 'rxjs/operators';




@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
 // user: BehaviorSubject<User> = new BehaviorSubject(null)

  constructor(private afAuth: AngularFireAuth) {
      this.user = afAuth.authState;
      // this.afAuth.authState.pipe(
      //   switchMap( (auth: any) => {
      //     if (auth) {
      //       /// signed in
      //       return this.db.object('users/' + auth.uid)
      //     } else {
      //       /// not signed in
      //       return of(null)
      //     }
      //   })
      // )
      //   .subscribe((user: any) => {
      //     this.user.next(user)
      //   })
    }


    ///// SignIn - SignOut Process /////

    // googleLogin() {
    //   const provider = new firebase.auth.GoogleAuthProvider()
    //   return this.afAuth.auth.signInWithPopup(provider)
    //     .then(credential =>  {
    //         this.updateUser(credential.user)
    //     })
    // }

    signOut() {
      this.afAuth.auth.signOut()
    }

    login(email: string, password: string) {
      this.afAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Nice, it worked!');
        })
        .catch(err => {
          console.log('Something went wrong:', err.message);
        });
    }

    //// Update user data ////

    /// updates database with user info after login
    /// only runs if user role is not already defined in database
    // private updateUser(authData: any) {
    //   const userData = new User(authData)
    //   const ref = this.db.object('users/' + authData.uid)
    //   ref.take(1)
    //      .subscribe((user: any) => {
    //       if (!user.role) {
    //         ref.update(userData)
    //       }
    //   })


    // }

    signup(email: string, password: string) {
      this.afAuth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {

          console.log('Success!', value);
        })
        .catch(err => {
          console.log('Something went wrong:', err.message);
        });
    }
}