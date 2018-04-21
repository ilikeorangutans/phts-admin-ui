import { HttpClient } from '@angular/common/http';
import { PathService } from './../../services/path.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  constructor(
    private http: HttpClient,
    private pathService: PathService
  ) { }

  updatePassword(existingPassword: string, newPassword: string): Observable<null> {
    const url = this.pathService.changePassword();
    const change = new PasswordChange(newPassword, existingPassword);

    return this.http.post(url, change)
      .map(result => null);
  }
}

class PasswordChange {

  constructor(
    password: string,
    oldPassword: string
  ) {
    this.password = password;
    this.oldPassword = this.oldPassword;
  }

  password: String;
  oldPassword: String;
}
