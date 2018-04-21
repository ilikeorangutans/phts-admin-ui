import { Injectable } from '@angular/core';

import { AuthResponse } from '../auth.service';
import { User } from './../models/user';

@Injectable()
export class SessionService {

  private user: User;

  constructor() { }

  getJWT(): string {
    return localStorage.getItem('AuthService.jwt');
  }

  getUser(): User {
    if (this.user === undefined) {
      this.user = this.loadUser();
    }
    return this.user;
  }

  loadUser(): User {
    const user = new User();
    user.email = localStorage.getItem('AuthService.userEmail');
    user.id = +localStorage.getItem('AuthService.userID');
    return user;
  }

  login(auth: AuthResponse) {
    localStorage.setItem('AuthService.userID', auth.id.toString(10));
    localStorage.setItem('AuthService.userEmail', auth.email);
    localStorage.setItem('AuthService.jwt', auth.jwt);

    this.user = new User();
    this.user.id = auth.id;
    this.user.email = auth.email;
  }

  isLoggedIn(): boolean {
    return this.getJWT() !== null;
  }

  logout() {
    localStorage.removeItem('AuthService.jwt');
    document.cookie = 'PHTS_ADMIN_JWT=;Max-Age=0;';
  }
}
