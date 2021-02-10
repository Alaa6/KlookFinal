import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ITrainDetailsReview } from '../viewModels/itrain-details-review';

@Injectable({
  providedIn: 'root'
})
export class TrainDetailsService {

  constructor(public fs:AngularFirestore) { }

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
}
