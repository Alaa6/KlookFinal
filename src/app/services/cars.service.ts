import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CarRental } from '../viewModels/car-rental';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(public cfs:AngularFirestore) { }

  getAllCarServivedImages():Observable<CarRental []>{
    return this.cfs.collection <CarRental>("carRental").valueChanges();
  }
}
