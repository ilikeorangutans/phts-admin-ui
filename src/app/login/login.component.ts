import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Credentials, AuthService } from '../services/auth.service';

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = new Credentials();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(event) {
    this.authService.authenticate(this.credentials)
      .then(success => {
        if (success) {
          this.router.navigate(['/dashboard']);
        }
      });
  }
}
