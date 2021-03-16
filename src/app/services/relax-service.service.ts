import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/ajax';

import { Tours } from './../viewModels/tours';
import { ICategory } from '../viewModels/icategory';
import { filter, map, take, mergeMap, toArray } from 'rxjs/operators';
import { ICity } from '../viewModels/icity';
import { IActivity } from '../viewModels/iactivity';
import { ITour } from '../viewModels/itour';
import { ISubCategory } from '../viewModels/isub-category';
import { ITrainDetails } from '../viewModels/itrain-details';
import { ITrainBook } from '../viewModels/itrain-book';
import { City } from './../viewModels/city';
import { IContinent } from '../viewModels/icontinent';
import { IEuropeTrains } from './../viewModels/ieurope-trains';
import { IFood } from '../viewModels/ifood';

@Injectable({
  providedIn: 'root',
})
export class RelaxServiceService {
  // tt:Observable<Tours[]>

  constructor(public afs: AngularFirestore) {
    // this.tt=
  }

  getallatours(item1: string, item2: string, value1: string, value2: string) {
    // return this.afs.collection<Tours>('ToursCollection', ref => ref.where('Categories', '==', 'Relax').where('Section','==','BestSeller'))
    return this.afs
      .collection<Tours>('ToursCollection', (ref) =>
        ref.where(item1, '==', value1).where(item2, '==', value2)
      )
      .snapshotChanges();
  }

  getall() {
    return this.afs.collection<IEuropeTrains>('train-sights').valueChanges();
  }

  // getCategoriesByCityAndSecion(_city: string, _section: string) {
  //   return this.afs.collection<ICategory>('categories', ref => ref.where('city', '==', _city).where('section', '==', _section)).snapshotChanges();

  // }

  getCategories(_city: string, _section?: string) {
    if (_section == undefined)
      return this.afs
        .collection<ICategory>('categories', (ref) =>
          ref.where('city', '==', _city)
        )
        .snapshotChanges();
    return this.afs
      .collection<ICategory>('categories', (ref) =>
        ref.where('city', '==', _city).where('section', '==', _section)
      )
      .snapshotChanges();
  }

  getAllCities(continent?: string) {
    if (continent == undefined)
      return this.afs.collection<ICity>('Cities').snapshotChanges();
    return this.afs
      .collection<ICity>('Cities', (ref) =>
        ref.where('continent', '==', continent)
      )
      .snapshotChanges();
  }

  // getAllTours(_city: string, _category: string, _section: string) {

  getAllTours(
    _city: string,
    _section?: string,
    _subCategory?: string,
    _activitiesCat?: string
  ) {
    if (_subCategory == undefined)
      return this.afs
        .collection<ITour>('ToursCollection', (ref) =>
          ref.where('City', '==', _city).where('Section', '==', _section)
        )
        .snapshotChanges();
    if (_section == undefined) {
      if (_activitiesCat == undefined)
        return this.afs
          .collection<ITour>('ToursCollection', (ref) =>
            ref
              .where('City', '==', _city)
              .where('Categories', '==', _subCategory)
          )
          .snapshotChanges();
      return this.afs
        .collection<ITour>('ToursCollection', (ref) =>
          ref
            .where('City', '==', _city)
            .where('Categories', '==', _subCategory)
            .where('SubCategories', '==', _activitiesCat)
        )
        .snapshotChanges();
    } else {
      return this.afs
        .collection<ITour>('ToursCollection', (ref) =>
          ref
            .where('City', '==', _city)
            .where('Categories', '==', _subCategory)
            .where('Section', '==', _section)
        )
        .snapshotChanges();
    }
  }

  // getFoodCards(
  //   _city: string,
  //   _section?: string,
  //   _subCategory?: string,
  //   //_activitiesCat?: string
  // ) {
  //   if (_subCategory == undefined)
  //     return this.afs
  //       .collection<IFood>('ToursCollection', (ref) =>
  //         ref.where('City', '==', _city).where('Section', '==', _section)
  //       )
  //       .snapshotChanges();
  //   if (_section == undefined) {
  //     // if (_activitiesCat == undefined)
  //     //   return this.afs
  //     //     .collection<IFood>('ToursCollection', (ref) =>
  //     //       ref
  //     //         .where('City', '==', _city)
  //     //         .where('Categories', '==', _subCategory)
  //     //     )
  //     //     .snapshotChanges();
  //     return this.afs
  //       .collection<IFood>('ToursCollection', (ref) =>
  //         ref
  //           .where('City', '==', _city)
  //           .where('Categories', '==', _subCategory)
  //         //  .where('SubCategories', '==', _activitiesCat)
  //       )
  //       .snapshotChanges();
  //   } else {
  //     return this.afs
  //       .collection<IFood>('ToursCollection', (ref) =>
  //         ref
  //           .where('City', '==', _city)
  //           .where('Categories', '==', _subCategory)
  //           .where('Section', '==', _section)
  //       )
  //       .snapshotChanges();
  //   }
  // }

  getFood(city: string) {
    return this.afs
      .collection<IFood>('ToursCollection', (ref) =>
        ref.where('City', '==', city).where('Categories', '==', 'Food')
      )
      .snapshotChanges();
  }
  // getFoodCards(city: string, category: string) {
  //   return this.afs
  //     .collection<IFood>('ToursCollection', (ref) =>
  //       ref.where('City', '==', city).where('Categories', '==', category)
  //     )
  //     .snapshotChanges();
  // }

  getSubCategory(_catName?: string) {
    if (_catName == undefined) {
      return this.afs
        .collection<ISubCategory>('SubCategories')
        .snapshotChanges();
    } else {
      return this.afs
        .collection<ISubCategory>('SubCategories', (ref) =>
          ref.where('Name', '==', _catName)
        )
        .snapshotChanges();
    }
  }

  addToTours(itemm: Tours) {
    // console.log(itemm)
    this.afs
      .collection('ToursCollection')
      .add(itemm)
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  }

  searchForTours(
    _city?: string,
    _category?: string,
    _collectionName?: string
  ): Observable<ITour[]> {
    if (_city != undefined && _category != undefined) {
      return this.afs
        .collection<ITour>(_collectionName, (ref) =>
          ref.where('City', '==', _city).where('Categories', '==', _category)
        )
        .valueChanges();
    } else {
      return this.afs.collection<ITour>(_collectionName).valueChanges();
    }
  }
  updatetour() {
    const tutorialsRef = this.afs.collection('ToursCollection');
    tutorialsRef
      .doc('id')
      .set({ title: 'zkoder Tut#1', url: 'bezkoder.com/zkoder-tut-1' });
  }

  gettour() {
    return this.afs.collection<Tours>('ToursCollection').snapshotChanges();
  }
  itemDoc?: AngularFirestoreDocument<Tours>;

  updateItem(item: Tours) {
    this.itemDoc = this.afs.doc(`ToursCollection/${item.id}`);
    this.itemDoc.update(item);
  }
  getContinentList() {
    return this.afs.collection<IContinent>('Continents').snapshotChanges();
  }
}
