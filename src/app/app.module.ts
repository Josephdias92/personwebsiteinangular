import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';


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
// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDGYD2qEqJUmCVU_8yTqoCm2otG2hPiGzg",
  authDomain: "josephdias92.firebaseapp.com",
  databaseURL: "https://josephdias92.firebaseio.com",
  storageBucket: "firebase-josephdias92.appspot.com",
  messagingSenderId: "891344356636"
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ResumePageComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
