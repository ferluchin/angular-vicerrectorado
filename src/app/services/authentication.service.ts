import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
  UserCredential,
} from '@angular/fire/auth';

import { concatMap, from, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);
  
  constructor(private auth: Auth) { }

  // signUp(username: string, password: string): Observable<UserCredential> {
  //   return from(createUserWithEmailAndPassword(this.auth, username, password));
  // }

  signUp(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  login(username: string, password: string): Observable<any>  {
    return from(signInWithEmailAndPassword(this.auth, username, password));

  }

  logout(): Observable<any> {
    return from(this.auth.signOut());
  }
}
