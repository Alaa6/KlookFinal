import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IFood } from '../viewModels/ifood';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  constructor(public fs: AngularFirestore, private http: HttpClient) {}

  getFoodCards(
    item1: string,
    item2: string,
    value1: string,
    value2: string
  ): Observable<IFood[]> {
    return this.fs
      .collection<IFood>('ToursCollection', (ref) =>
        ref.where(item1, '==', value1).where(item2, '==', value2)
      )
      .valueChanges();
  }

  searchForFood(_city: string, _category: string): Observable<IFood[]> {
    return this.fs
      .collection<IFood>('ToursCollection', (ref) =>
        ref.where('City', '==', _city).where('Categories', '==', _category)
      )
      .valueChanges();
  }
}
