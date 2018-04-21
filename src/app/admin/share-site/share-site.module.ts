import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareSiteRoutingModule } from './share-site-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ShareSiteRoutingModule,
    FormsModule
  ],
  declarations: [DashboardComponent]
})
export class ShareSiteModule { }
