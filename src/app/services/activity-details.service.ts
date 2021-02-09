import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Wifi } from '../viewModels/wifi';

@Injectable({
  providedIn: 'root'
})
export class ActivityDetailsService {

  constructor(private fs: AngularFirestore) {}

  getAllWifi(){
   
    return this.fs.collection <Wifi>('Wifi_&_SimCards').snapshotChanges();
   }
   
}
