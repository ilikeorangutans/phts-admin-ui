import { FormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AccountService } from './services/account.service';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule
  ],
  declarations: [AccountDashboardComponent],
  providers: [AccountService]
})
export class AccountModule { }
