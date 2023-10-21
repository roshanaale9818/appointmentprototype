import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { MainComponent } from './components/main/main.component';
import { ViewappointmentComponent } from './components/viewappointment/viewappointment.component';
import { ViewhospitalComponent } from './components/viewhospital/viewhospital.component';
import { BookappointmentComponent } from './components/bookappointment/bookappointment.component';
import { AppointmentdetailComponent } from './components/appointmentdetail/appointmentdetail.component';

const routes: Routes = [
  {
    path:'home',
    component:MainComponent
  }
  ,{
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'appointment',
    component:HomeComponent
  },
  {
    path:'viewappointment',
    component:ViewappointmentComponent
  },
  {
    path:'hospital/:id',
    component:ViewhospitalComponent
  },
  {
    path:'bookappointment',
    component:BookappointmentComponent
  },
  {
    path:'appointmentdetail',
    component:AppointmentdetailComponent
  }

  ,{
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
