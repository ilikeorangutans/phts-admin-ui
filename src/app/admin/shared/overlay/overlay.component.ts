import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit, OnDestroy {

  private readonly _visibility: BehaviorSubject<boolean> = new BehaviorSubject(false);
  readonly visible = this._visibility.asObservable();

  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscription = this.visible.subscribe(visible => {
      if (visible) {
        this.onShow();
      } else {
        this.onHide();
      }
    });
  }

  private onShow(): void {
    Observable.fromEvent(document, 'keyup')
      .filter(event => (event as KeyboardEvent).code === 'Escape')
      .first()
      .subscribe(_ => this.hide());
  }

  private onHide(): void {

  }

  show(): void {
    this._visibility.next(true);
  }

  hide(): void {
    this._visibility.next(false);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
