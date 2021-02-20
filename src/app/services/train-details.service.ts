import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ITrainDetails } from '../viewModels/itrain-details';
import { ITrainDetailsReview } from '../viewModels/itrain-details-review';

@Injectable({
  providedIn: 'root',
})
export class TrainDetailsService {
  constructor(public fs: AngularFirestore) { }

  //   getAllReviews()
  //   {
  //     this.fs.collection("train-reviwes").where("type", "==", "book")
  // .get()
  // .then(query=>{
  //     let data = query.docs.map(doc=>{
  //         let x = doc.data()
  //             x['_id']=doc.id;
  //             return x;
  //     })
  //     res.status(200).json(data);
  // })
  //   }

  getReviews(): Observable<ITrainDetailsReview[]> {
    return this.fs
      .collection<ITrainDetailsReview>('train-reviews', (ref) =>
        ref.where('type', '==', 'book')
      )
      .valueChanges();
  }

  bookTrip(data: ITrainDetails) {
    return this.fs
      .collection<any>('train-book')
      .add(data)
      .then(
        (res) => {
          console.log('trip is booked ' + res);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
