import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/ajax';

import { Tours } from './../viewModels/tours';
import { ICategory } from '../viewModels/icategory';
import { filter, map, take, mergeMap, toArray } from 'rxjs/operators'
import { ICity } from '../viewModels/icity';
import { IActivity } from '../viewModels/iactivity';
import { ITour } from '../viewModels/itour';
import { ISubCategory } from '../viewModels/isub-category';
import { City } from './../viewModels/city';




@Injectable({
  providedIn: 'root'
})
export class RelaxServiceService {
  // tt:Observable<Tours[]>

  constructor(public afs: AngularFirestore) {
    // this.tt=
  }

  getallatours(item1: string, item2: string, value1: string, value2: string) {

    // return this.afs.collection<Tours>('ToursCollection', ref => ref.where('Categories', '==', 'Relax').where('Section','==','BestSeller'))
    return this.afs.collection<Tours>('ToursCollection', ref => ref.where(item1, '==', value1).where(item2, '==', value2))
      .snapshotChanges();


  }

  getall() {
    return this.afs.collection<Tours>('ToursCollection').snapshotChanges();
  }

  // getCategoriesByCityAndSecion(_city: string, _section: string) { 
  //   return this.afs.collection<ICategory>('categories', ref => ref.where('city', '==', _city).where('section', '==', _section)).snapshotChanges();


  // }




  getCategories(_city: string, _section?: string) {
    if (_section == undefined)
      return this.afs.collection<ICategory>('categories', ref => ref.where('city', '==', _city)).snapshotChanges()
    return this.afs.collection<ICategory>('categories', ref => ref.where('city', '==', _city).where('section', '==', _section)).snapshotChanges()
  }

  getAllCities() {
    return this.afs.collection<ICity>('Cities').snapshotChanges()
  }

  // getAllTours(_city: string, _category: string, _section: string) {

  getAllTours(_city: string, _section?: string, _category?: string) {

    if (_category == undefined)
      return this.afs.collection<ITour>('ToursCollection', ref => ref.where('City', '==', _city).where('Section', '==', _section)).snapshotChanges()
    if (_section == undefined)
      return this.afs.collection<ITour>('ToursCollection', ref => ref.where('City', '==', _city).where('Categories', '==', _category)).snapshotChanges()
    else {
      return this.afs.collection<ITour>('ToursCollection', ref => ref.where('City', '==', _city).where('Categories', '==', _category).where('Section', '==', _section)).snapshotChanges()
    }


  }

  getSubCategory(_catName?: string) {
    if (_catName == undefined) {
      return this.afs.collection<ISubCategory>('SubCategories').snapshotChanges();
    }
    else {
      return this.afs.collection<ISubCategory>('SubCategories', ref => ref.where('Name', '==', _catName)).snapshotChanges();


    }


  }



  addToTours(itemm: Tours) {

    console.log(itemm)
    this.afs.collection('ToursCollection').add(itemm).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  searchForTours(_city: string, _category: string): Observable<ITour[]> {

    return this.afs.collection<ITour>('ToursCollection', ref => ref.where('City', '==', _city)
      .where('Categories', '==', _category)).valueChanges()

  }
      updatetour(){
        const tutorialsRef = this.afs.collection('ToursCollection');
tutorialsRef.doc('id').set({ title: 'zkoder Tut#1', url: 'bezkoder.com/zkoder-tut-1' });
      }

      gettour(){
    return this.afs.collection<Tours>('ToursCollection').snapshotChanges()

      }
  itemDoc?: AngularFirestoreDocument<Tours>;

      updateItem(item: Tours){
        
        this.itemDoc = this.afs.doc(`ToursCollection/${item.id}`);
        this.itemDoc.update(item);
      }

}

