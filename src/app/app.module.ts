import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/resume',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path:'resume',
    component:ResumePageComponent
  },
  {
    path:'contact',
    component:ContactMeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ResumePageComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { 
      useHash: true 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
