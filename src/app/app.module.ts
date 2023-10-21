import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { ViewappointmentComponent } from './components/viewappointment/viewappointment.component';
import { ViewhospitalComponent } from './components/viewhospital/viewhospital.component';
import { BookappointmentComponent } from './components/bookappointment/bookappointment.component';
import { AppointmentdetailComponent } from './components/appointmentdetail/appointmentdetail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    MainComponent,
    ViewappointmentComponent,
    ViewhospitalComponent,
    BookappointmentComponent,
    AppointmentdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
