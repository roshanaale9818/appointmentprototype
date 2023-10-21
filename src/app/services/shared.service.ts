import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  bookingList :Booking[]= [];
  getBookingList ():Booking[]{
    console.log(this.bookingList);
        return this.bookingList;
  }
  setBookingList(booking:Booking){
      this.bookingList.push(booking);
  }
}
