import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { AppRoutingModule } from './app-routing.module';

var config = {
  apiKey: "AIzaSyB4vG6sBI7-i5Eduy9OGn5bDCZy5JHRyM0",
  authDomain: "fir-auth-with-angular-d8097.firebaseapp.com",
  databaseURL: "https://fir-auth-with-angular-d8097.firebaseio.com",
  projectId: "fir-auth-with-angular-d8097",
  storageBucket: "fir-auth-with-angular-d8097.appspot.com",
  messagingSenderId: "94778554567",
  appId: "1:94778554567:web:d1c8077f4f5b7358fa66e2",
  measurementId: "G-0FXLY54368"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule, 
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
