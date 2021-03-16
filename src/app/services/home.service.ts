import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ICity } from '../viewModels/i-city';
import { Hotels } from './../viewModels/hotels';
import { Tours } from './../viewModels/tours';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private fs: AngularFirestore) {}

  getCityArabic(uid: string) {
    return this.fs.firestore.doc(`ToursCollection/${uid}`).get();
  }
  //  getCityArabic(){
  //    if (localStorage.getItem("lang")=='ar'){
  //     return this.fs.collection<Tours>('ToursCollection',
  //     ref => ref.where('City', '==', 'Cairo')
  //       .where('Categories', '==', 'Home')
  //       .where('Section', '==', 'Near in cairo')).;
  //    }
  //  }

  getNearYou() {
    return this.fs
      .collection<Tours>('ToursCollection', (ref) =>
        ref
          .where('City', '==', 'Cairo')
          .where('Categories', '==', 'Home')
          .where('Section', '==', 'Near in cairo')
      )
      .snapshotChanges();
  }

  getwish(email:string) {
    return this.fs
      .collection<Tours>('wishlist', (ref) =>
        ref
          .where('Email', '==', email)
          // .where('Categories', '==', 'Home')
          // .where('Section', '==', 'Near in cairo')
      )
      .snapshotChanges();
  }

  // getNearYou() {
  //   return this.fs.collection<Tours>('ToursCollection',
  //     ref => ref.where('City', '==', 'Cairo')).snapshotChanges;
  // }

  getIncredibleDestinations() {
    return this.fs
      .collection<ICity>('Cities', (ref) =>
        ref.where('Section', '==', 'HomeIncDes')
      )
      .snapshotChanges();
  }

  getAllCities() {
    return this.fs.collection<ICity>('Cities').snapshotChanges();
  }

  getTopThings() {
    return this.fs
      .collection<Tours>('ToursCollection', (ref) =>
        ref
          .where('Categories', '==', 'Home')
          .where('Section', '==', 'Top thing to do')
          .where('City', '==', 'Cairo')
      )
      .snapshotChanges();
  }
  getInspired() {
    return this.fs
      .collection<Tours>('ToursCollection', (ref) =>
        ref.where('Section', '==', 'Get Inspired')
      )
      .snapshotChanges();
  }
  // getInspiredTaipei(){
  //   return this.fs.collection<Tours>('ToursCollection',
  //   ref => ref.where('Title', '==', 'Maokong Gondola Combo Tickets in Taipei')).snapshotChanges();
  // }
  // getInspiredHongKong(){
  //   return this.fs.collection<Tours>('ToursCollection',
  //   ref => ref.where('Title', '==', 'Peak Tram and Sky Terrace 428 Tour Combo Package...')).snapshotChanges();
  // }

  getKlookRecommended() {
    return this.fs
      .collection<Tours>('ToursCollection', (ref) =>
        ref
          .where('Categories', '==', 'Home')
          .where('Section', '==', 'Klook Recommended')
      )
      .snapshotChanges();
  }

  getAttractionsDestinations(){
    return this.fs.collection<Tours>('ToursCollection',
    ref => ref.where('Categories', '==', 'Attractions')
      ).snapshotChanges();
  }
  getHotelDestinations(){
    return this.fs.collection<Hotels>('Hotel-',
    ref => ref.where('CityHotel', '==', 'singapore')
      ).snapshotChanges();
  }
  getFoodDestinations(){
    return this.fs.collection<Tours>('ToursCollection',
    ref => ref.where('Categories', '==', 'Food')
    // .where('Section','==','Other')
      ).snapshotChanges();
  }

  getDestinationDetails(ID: string, collection: string) {

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
 
}
