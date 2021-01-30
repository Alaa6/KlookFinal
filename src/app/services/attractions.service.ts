import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ICity } from '../viewModels/i-city';
import { Tours } from '../viewModels/tours';

@Injectable({
  providedIn: 'root'
})
export class AttractionsService {

  constructor(private fs: AngularFirestore) { }

  getMustVisitHKM():Observable<ICity[]>{
    return this.fs.collection<ICity>('Cities',
    ref=> ref.where ('City1', '==', 'Hong Kong' || 'Macau')         
    ).valueChanges()
  }

  getBestSeller():Observable<Tours[]>{
    return this.fs.collection<Tours>('ToursCollection',
    ref=> ref.where('Categories', '==', 'Attractions')
             .where('Section', '==', 'BestSeller')
             //.where('City', '==', 'Hong Kong')
    ).valueChanges();
  }

  getAwesomeDeals():Observable<Tours[]>{
    return this.fs.collection<Tours>('ToursCollection',
    ref=> ref.where('Categories', '==', 'Attractions')
             .where('Section', '==', 'AwsomeDeals')
             //.where('City', '==', 'Hong Kong')
    ).valueChanges();
  }

  getBestSellerHK():Observable<Tours[]>{
    return this.fs.collection<Tours>('ToursCollection',
    ref=> ref.where('Categories', '==', 'Attractions')
             .where('Section','==','BestSeller')
             .where('City', '==', 'Hong Kong')
    ).valueChanges()
  }

  getAwesomeDealsHK():Observable<Tours[]>{
    return this.fs.collection<Tours>('ToursCollection',
    ref=> ref.where('Categories', '==', 'Attractions')
             .where('Section','==','AwsomeDeals')
             .where('City', '==', 'Hong Kong')
    ).valueChanges()
  }

  getNearByHK():Observable<ICity[]>{
    return this.fs.collection<ICity>('Cities',
    ref=> ref.where('City1', '==', 'Macau')   //Shenzhen & Guangzhou          
    ).valueChanges()
   
  }
}
