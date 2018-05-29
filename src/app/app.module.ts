import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import {MetaCoinService, Web3Service} from '../services/services';
import { BetComponent } from './bet/bet.component'

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const SERVICES = [
  MetaCoinService,
  Web3Service,
]

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
         path:'',
         component: HomeComponent 
      },
      {
        path: "bet",
        component: BetComponent
      }
    ]
  }
,
  {
    path: "**",
    redirectTo: ""
    }
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    BetComponent,
    HomeComponent
  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
