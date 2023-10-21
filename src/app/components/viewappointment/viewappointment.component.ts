import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/services/booking.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent {

  constructor(private http: HttpClient,
    private router: Router,
    private sharedService: SharedService


  ) {

    this.dataList = this.sharedService.getBookingList();
    if (this.dataList.length == 0) {
      this.dataList = [{
        bookedBy
          :
          "user12",
        date
          :
          "2023/10/22",
        doctorName
          :
          "Dr. Sarah Johnson",
        hospitalName
          :
          "City Hospital",
        time
          :
          "04:30 PM"
      }]
    }
  }


  dataList: Booking[] = [];
  ngOnInit() {

  }
  onViewDetail(item:Booking){
this.router.navigate(['/appointmentdetail', item]);
  }



}
