import { ShareSite } from './../../models/share-site';
import { Component, OnInit } from '@angular/core';
import { ShareSiteService } from '../../services/share-site.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  shareSites: Array<ShareSite> = [];

  shareSite: ShareSite = new ShareSite();

  constructor(
    private shareSiteService: ShareSiteService
  ) { }

  ngOnInit() {
    this.loadShareSites();
  }

  loadShareSites() {
    this.shareSiteService.list()
      .first()
      .subscribe(sites => this.shareSites = sites);
  }

  onSubmit() {
    this.shareSiteService.save(this.shareSite)
      .then(shareSite => {
        this.loadShareSites();
        this.shareSite = new ShareSite();
      });
  }

}
