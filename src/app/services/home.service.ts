import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ICity } from '../viewModels/i-city';
import { Tours } from '../viewModels/tours';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private fs: AngularFirestore) { }

  getNearYou():Observable<Tours[]>{
    return this.fs.collection<Tours>('ToursCollection',
     ref=> ref.where('City', '==' ,'Cairo' )
              .where('Categories', '==' , 'Home')
              .where('Section', '==', 'Near in cairo')).valueChanges();
  }

  getIncredibleDestinations():Observable<ICity[]>{
    return this.fs.collection<ICity>('Cities',
    ref=> ref.where ('Section', '==', 'HomeIncDes')
    ).valueChanges()
  }

  
  getTopThings():Observable<Tours[]>{
    return this.fs.collection<Tours>('ToursCollection',
     ref=> ref.where('Categories', '==' , 'Home')
              .where('Section', '==', 'Top thing to do')
              .where('City', '==', 'Cairo')).valueChanges();
  }

  getKlookRecommended():Observable<Tours[]>{
    return this.fs.collection<Tours>('ToursCollection',
     ref=> ref.where('Categories', '==' , 'Home')
              .where('Section', '==', 'Klook Recommended')).valueChanges();
  }
}
