import { Injectable } from '@angular/core';
import { authState } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);
  constructor(private auth: Auth) { }

  login(username: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, username, password));

  }

  logout() {
    return from(this.auth.signOut());
  }
}
