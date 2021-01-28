import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/ajax';

import { Tours } from './../viewModels/tours';
import { ICategory } from '../viewModels/icategory';
import { filter, map, take, mergeMap, toArray } from 'rxjs/operators'
import { ICity } from '../viewModels/icity';
import { IActivity } from '../viewModels/iactivity';




@Injectable({
  providedIn: 'root'
})
export class RelaxServiceService {
  // tt:Observable<Tours[]>
  constructor(public afs: AngularFirestore) {
    // this.tt=
  }

  getallatours(item1: string, item2: string, value1: string, value2: string): Observable<Tours[]> {

    // return this.afs.collection<Tours>('ToursCollection', ref => ref.where('Categories', '==', 'Relax').where('Section','==','BestSeller'))
    return this.afs.collection<Tours>('ToursCollection', ref => ref.where(item1, '==', value1).where(item2, '==', value2))
      .valueChanges();


  }

  getCategoriesByCity(_city: string): Observable<ICategory[]> {

    // return this.afs.collection<ICategory>('categories').snapshotChanges().pipe(

    //   map(actions => actions.map(a => {
    //     const data = a.payload.doc.data()
    //     const id = a.payload.doc.id;
    //     console.log(data , 'data ');
    //     console.log(id , 'id ');

        
    //     return { id, ...data };
    //   }))
    // );'

    return this.afs.collection<ICategory>('categories' ,ref => ref.where( 'city', '==', _city)).valueChanges()

  }

  getAllCities(): Observable<ICity[]> {


    return this.afs.collection<ICity>('Cities').valueChanges()

  }
  getAllActivities(_city : string): Observable<IActivity[]> {


    return this.afs.collection<IActivity>('Activities' ,ref => ref.where( 'City', '==', _city)).valueChanges()

  }

}

