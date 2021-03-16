import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IBooking } from '../viewModels/ibooking';
import { IHotelBooking } from '../viewModels/ihotel-booking';
import { Wifi } from '../viewModels/wifi';
import { IWish } from './../viewModels/iwish';

@Injectable({
  providedIn: 'root'
})
export class ActivityDetailsService {

  constructor(private fs: AngularFirestore) { }

  // getAllWifi(){
  //   console.log(this.fs.collection <Wifi>('Wifi_&_SimCards').snapshotChanges());
  //   return this.fs.collection <Wifi>('Wifi_&_SimCards').snapshotChanges();
  //  }

  // getAllCollections(collection: string) {
  //   return this.fs.collection<any>(collection).snapshotChanges();
  // }

  // getAllWifi() {
  //   return this.fs.collection<Wifi>('Wifi_&_SimCards').snapshotChanges();
  // }

  getActivityDetails(ID: string, collection: string) {

    return this.fs.collection(collection).doc(ID).get().toPromise().then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

    }).catch((error) => {
      console.log("Error getting document:", error);
    });


  }
  Booking(data: IBooking) {
    return this.fs.collection<any>('Booking').add(data).then
      ((res) => { console.log("Activity is booked ") },
        (err) => { console.log(err) })
  }

  WishList(data: IWish) {
    return this.fs.collection<any>('wishlist').add(data).then
      ((res) => { console.log("Activity is booked ") },
        (err) => { console.log(err) })
  }
}
