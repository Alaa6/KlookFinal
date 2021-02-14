import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/ajax';

import { Tours } from './../viewModels/tours';
import { ICategory } from '../viewModels/icategory';
import { filter, map, take, mergeMap, toArray } from 'rxjs/operators'
import { ICity } from '../viewModels/icity';
import { IActivity } from '../viewModels/iactivity';
import { ITour } from '../viewModels/itour';
import { ISubCategory } from '../viewModels/isub-category';




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

  getall(){
    return this.afs.collection<Tours>('ToursCollection').valueChanges();
  }
  getCategoriesByCityAndSecion(_city: string , _section : string): Observable<ICategory[]> {



    return this.afs.collection<ICategory>('categories' ,ref => ref.where( 'city', '==', _city).where('section', '==',_section )).valueChanges()

  }

  getAllCities(): Observable<ICity[]> {



    return this.afs.collection<ICity>('Cities').valueChanges()

  }
  getAllTours(_city : string  , _category : string , _section : string): Observable<ITour[]> {


    return this.afs.collection<ITour>('ToursCollection' ,ref => ref.where( 'City', '==', _city ).where('Categories',  '==', _category).where('Section',  '==', _section)).valueChanges()

  }

  getSubCategory (_catName : string) :  Observable<ISubCategory[]>  {
    return this.afs.collection <ISubCategory> ('SubCategories' ,ref => ref.where( 'Name' , '==', _catName )).valueChanges();

  }

  addToTours(itemm:Tours){

    console.log(itemm)
    this.afs.collection('ToursCollection').add(itemm).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
      }


      searchForTours(_city : string  , _category : string ): Observable<ITour[]> {


        return this.afs.collection<ITour>('ToursCollection' ,ref => ref.where( 'City', '==', _city )
        .where('Categories',  '==', _category)).valueChanges()
    
      }

}

