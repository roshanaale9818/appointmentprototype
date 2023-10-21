import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/services/booking.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent {
  timeList:string[]=[
    "09:00",
  "10:15",
  "11:30",
  "12:45",
  "13:30",
  "14:45",
  "15:30",
  "16:45",
  "17:30",
  "18:45"
  ]
  onSearchValue = '';
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private sharedService:SharedService,
    private router:Router
    ) {
    console.log(  this.activatedRoute.snapshot.params)
    // this.currentId = this.activatedRoute.snapshot.params['id'];
    let id = this.activatedRoute.snapshot.params['id'];
    let doctorName = this.activatedRoute.snapshot.params['name'];
    let hospitalName =this.activatedRoute.snapshot.params['hospitalname'];
    this.bookingObject={
      id,
      doctorName,
      hospitalName,
    };
    console.log(this.bookingObject);

  }
  bookingObject:any ={};
  currentHospital: any;
  currentId: string = '1';
  hospitalList: any = [];
  getDataList() {
    this.http.get('assets/doctors.json').subscribe((res) => {
      this.dataList = res;
    })
    this.http.get('assets/hospitallist.json').subscribe((res) => {
      this.hospitalList = res;
      this.currentHospital = this.hospitalList.filter((x: any) => x.id == this.currentId)[0];
    })
  }

  onReset() {
    this.getDataList();
  }

  dataList: any = [];
  ngOnInit() {
    this.getDataList();
  }

  selectedBooking:Booking ={
    bookedBy:"RoshanAale (loggedinuser)",
    date:'',
    doctorName:'',
    time:'',
    hospitalName:''
  }
  onTimeChange(time:string){
    this.selectedBooking.time=time;
  }
  onBook(){
      this.selectedBooking.doctorName=this.bookingObject.doctorName;
      this.selectedBooking.hospitalName = this.bookingObject.hospitalName;
      if(!this.selectedBooking.time || !this.selectedBooking.time || !this.selectedBooking.hospitalName){
        return;
      }
      if(confirm("Are you sure you want to book?")){
            this.sharedService.setBookingList(this.selectedBooking);
            alert("Booking saved");
      }
  }
  onGotoMainPage(){
    this.router.navigate(['/']);
  }

}
