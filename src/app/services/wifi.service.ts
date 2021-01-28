import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Wifi } from '../viewModels/wifi';

@Injectable({
  providedIn: 'root'
})
export class WifiService {

  constructor(public fs:AngularFirestore) { }

  getAllWifi():Observable<Wifi []>{
   return this.fs.collection <Wifi>('Wifi_&_SimCards').valueChanges();
  }

}
