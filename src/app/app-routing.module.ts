import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyComponent } from './dashboard/company/company.component';
import { LedgersComponent } from './dashboard/ledgers/ledgers.component';
import { VouchersComponent } from './dashboard/vouchers/vouchers.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'dashboard',component: DashboardComponent,
    children: [
      { path: 'company', component:CompanyComponent },
      { path: 'ledgers', component:LedgersComponent },
      { path: 'vouchers', component:VouchersComponent }
    ]
 }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}