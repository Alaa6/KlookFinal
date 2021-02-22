import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IEuropeTrains } from '../viewModels/ieurope-trains';
import { ITrainBook } from '../viewModels/itrain-book';
import { ITrainReview } from '../viewModels/itrain-review';




@Injectable({
  providedIn: 'root'
})
export class EuropeTrainService {

  constructor(public fs: AngularFirestore) { }

  getAllTrips() {
    return this.fs.collection<IEuropeTrains>('train-sights').snapshotChanges();
    // return this.fs.collection<IEuropeTrains>('ToursCollection', ref => ref.where(item1, '==', value1).where(item2,'==',value2))
    // .valueChanges();
  }

  //function for booking form take data from form and set it in the collection and return the added object


  getReviews() {
    return this.fs.collection<ITrainReview>('train-reviews').snapshotChanges();
  }

  // bookTrip(from:string,to:string,date:string,time:string,NoOfPassenger:Array<number>,typeOfPassenger:Array<string>):Observable<ITrainBook>{
  bookTrip(data: ITrainBook) {
    return this.fs.collection<any>('train-book').add(data).then
      ((res) => { console.log("trip is booked " + res) },
        (err) => { console.log(err) })
  }

}
