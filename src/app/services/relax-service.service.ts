import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/ajax';

import { Tours } from './../viewModels/tours';




@Injectable({
  providedIn: 'root'
})
export class RelaxServiceService {
// tt:Observable<Tours[]>
  constructor(public afs: AngularFirestore) {
    // this.tt=
   }

  getallatours(item1:string,item2:string,value1:string,value2:string):Observable<Tours[]>{

    // return this.afs.collection<Tours>('ToursCollection', ref => ref.where('Categories', '==', 'Relax').where('Section','==','BestSeller'))
    return this.afs.collection<Tours>('ToursCollection', ref => ref.where(item1, '==', value1).where(item2,'==',value2))
   .valueChanges();
  

  }
}
