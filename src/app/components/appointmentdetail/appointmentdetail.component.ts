import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointmentdetail',
  templateUrl: './appointmentdetail.component.html',
  styleUrls: ['./appointmentdetail.component.css']
})
export class AppointmentdetailComponent {
  bookingDetail: any;
  targetDate: Date = new Date('2023-12-31T23:59:59'); // Set your target date here
  timeRemaining: any;
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.params)
    // this.currentId = this.activatedRoute.snapshot.params['id'];
    let bookedBy = this.activatedRoute.snapshot.params['bookedBy'];
    let date = this.activatedRoute.snapshot.params['date'];
    let hospitalName = this.activatedRoute.snapshot.params['hospitalName'];
    let doctorName = this.activatedRoute.snapshot.params['doctorName'];
    let time = this.activatedRoute.snapshot.params['time'];
    this.bookingDetail = {
      bookedBy,
      date,
      hospitalName,
      doctorName, time,
      waitingTime:'10mins'
    }
    this.targetDate = new Date(date.split('/').join('-')+"T"+time);

  }
  ngOnInit() {
    this.updateTimeRemaining();
    setInterval(() => {
      this.updateTimeRemaining();
    }, 1000);
  }

  updateTimeRemaining() {
    const currentTime: Date = new Date();
    const difference: number = this.targetDate.getTime() - currentTime.getTime();

    const seconds: number = Math.floor(difference / 1000);
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    const days: number = Math.floor(hours / 24);

    this.timeRemaining = {
      days: days,
      hours: hours % 24,
      minutes: minutes % 60,
      seconds: seconds % 60
    };
  }
}
