import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/observable/fromEvent';
import { SessionService } from './services/session.service';
import { PhtsService } from './services/phts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit() {
  }
}

