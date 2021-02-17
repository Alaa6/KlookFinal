import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Hotels } from '../viewModels/hotels';
import { IHotelBooking } from '../viewModels/ihotel-booking';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(public hfs: AngularFirestore) { }


  getAllPopularHotels() {
    return this.hfs.collection<Hotels>('Hotel-', ref => ref.where('Section', '==', 'Popular')).snapshotChanges();
  }

  getAllSatycationHotels() {
    return this.hfs.collection<Hotels>('Hotel-', ref => ref.where('Section', '==', 'Staycation')).snapshotChanges();
  }
  getAllVouchersHotels() {
    return this.hfs.collection<Hotels>('Hotel-', ref => ref.where('Section', '==', 'Vouchers')).snapshotChanges();
  }


  hotelBooking(data: IHotelBooking) {
    return this.hfs.collection<any>('HotelBooking').add(data).then
      ((res) => { console.log("Hotel is booked ") },
        (err) => { console.log(err) })
  }
}
