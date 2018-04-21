import { User } from './../../models/user';
import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.css']
})
export class AccountDashboardComponent implements OnInit {

  user: User;

  passwordChangeRequest = new PasswordChangeRequest();

  constructor(
    private accountService: AccountService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
  }

  onSubmit() {
    this.passwordChangeRequest = new PasswordChangeRequest();
    this.accountService.updatePassword(this.passwordChangeRequest.oldPassword, this.passwordChangeRequest.password);
  }

}

class PasswordChangeRequest {
  password: string;
  passwordConfirm: string;
  oldPassword: string;

  match(): boolean {
    return this.password !== undefined && this.password.length > 0 && this.password === this.passwordConfirm;
  }
}
