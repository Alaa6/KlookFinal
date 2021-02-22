import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IExperiencexs } from '../viewModels/iexperiencexs';
import { ITour } from '../viewModels/itour';

@Injectable({
  providedIn: 'root'
})
export class ExperienceServiceService {

  constructor(public fs:AngularFirestore) { }
 
  getSmallCards(i1:string,v1:string,i2:string,v2:string):Observable <IExperiencexs[]>
  {
    console.log("from categories collection")
    return this.fs.collection<IExperiencexs>('categories', ref => ref.where(i1, '==', v1).where(i2, '==', v2)).valueChanges();

  }
  getBestseller(i1:string,v1:string,i2:string,v2:string):Observable <ITour[]>
  {

    return this.fs.collection<ITour>('ToursCollection' ,ref => ref.where( i1, '==', v1).where(i2,  '==',v2)).valueChanges()

  }
}
