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
import { DirectorDetailsComponent } from './director-details/director-details.component';
import { FlagsComponent } from './flags/flags.component';
import { NewsComponent } from './news/news.component';


const appRoutes:Routes =[
  {
    path:'', component:CompanyProfileComponent
  },
  {
    path:'director', component:DirectorComponent
  },
  {
    path:'charges', component:ChargesComponent
  },
  {
    path:'rating', component:RatingComponent
  },
  {
    path:'financials', component:FinancialsComponent
  },
  {
    path:'auditors', component:AuditorsComponent
  },
  {
    path:'peers', component:PeersComponent
  },
  {
    path:'shareholding', component:ShareholdingComponent
  },
  {
    path: 'directorDetails',component: DirectorDetailsComponent
  },
  {
    path:'flags',component: FlagsComponent
  },
  {
    path: 'news',component: NewsComponent
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
    ShareholdingComponent,
    DirectorDetailsComponent,
    FlagsComponent,
    NewsComponent  
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
