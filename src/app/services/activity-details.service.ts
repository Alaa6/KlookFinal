import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Wifi } from '../viewModels/wifi';

@Injectable({
  providedIn: 'root'
})
export class ActivityDetailsService {

  constructor(private fs: AngularFirestore) {}

  getAllWifi(){
    console.log(this.fs.collection <Wifi>('Wifi_&_SimCards').snapshotChanges());
    return this.fs.collection <Wifi>('Wifi_&_SimCards').snapshotChanges();
   }
   
}
