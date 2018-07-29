import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShareSite } from './../../models/share-site';
import { Component, OnInit } from '@angular/core';
import { ShareSiteService } from '../../services/share-site.service';
import { Subject } from 'rxjs/Subject';
import { ShareSiteStore } from '../../stores/share-site.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  shareSite: ShareSite = new ShareSite();

  constructor(
    readonly shareSiteStore: ShareSiteStore
  ) { }

  ngOnInit() {

    this.shareSiteStore.refresh();
  }

  onSubmit() {
    this.shareSiteStore.save(this.shareSite);
  }

  delete(shareSite: ShareSite): void {
    if (!confirm(`Delete share site "${shareSite.domain}"?`)) {
      return;
    }

    this.shareSiteStore.delete(shareSite);
  }

}
