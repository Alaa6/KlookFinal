import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Wifi } from '../viewModels/wifi';


@Injectable({
  providedIn: 'root'
})
export class WifiService {

  constructor(private fs: AngularFirestore) {}

  getAllWifi():Observable<Wifi []>{
   
   return this.fs.collection <Wifi>('Wifi_&_SimCards').valueChanges();
  }
  // getWifiById(wID:string){
  //   return this.fs.collection<Wifi>('Wifi_&_SimCards').snapshotChanges();
  // }

  async getWifiById(docId:string){
    let document = await this.fs.doc(docId).get().toPromise();
    return document.data();
  }
}
