import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DirectorComponent } from './director/director.component';
import { ChargesComponent } from './charges/charges.component';
import { RatingComponent } from './rating/rating.component';
import { FinancialsComponent } from './financials/financials.component';
import { AuditorsComponent } from './auditors/auditors.component';
import { PeersComponent } from './peers/peers.component';
import { ShareholdingComponent } from './shareholding/shareholding.component';


const appRoutes:Routes =[
  {
    path:'', 
    component:CompanyProfileComponent
  },
  {
    path:'directorComponent', 
    component:DirectorComponent
  },
  {
    path:'chargesComponent', 
    component:ChargesComponent
  },
  {
    path:'ratingComponent', 
    component:RatingComponent
  },
  {
    path:'financialsComponent', 
    component:FinancialsComponent
  },
  {
    path:'autitorsComponent', 
    component:AuditorsComponent
  },
  {
    path:'peersComponent', 
    component:PeersComponent
  },
  {
    path:'shareholdingComponent', 
    component:ShareholdingComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    CompanyProfileComponent,
    NavbarComponent,
    DirectorComponent,
    ChargesComponent,
    RatingComponent,
    FinancialsComponent,
    AuditorsComponent,
    PeersComponent,
    ShareholdingComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
