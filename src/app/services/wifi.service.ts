import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Wifi } from '../viewModels/wifi';
//import firebase from 'firebase/app';
//import 'firebase/firestore';
//import { FirebaseApp } from '@angular/fire';
//import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class WifiService {

  constructor(private fs: AngularFirestore) { }

  // getAllWifi():Observable<Wifi []>{
  //  console.log(this.fs.collection <Wifi>('Wifi_&_SimCards').valueChanges());
  //  return this.fs.collection <Wifi>('Wifi_&_SimCards').valueChanges();
  // }
  //db = firebase.firestore(app);
  getAllWifi() {
    return this.fs.collection<Wifi>('Wifi_&_SimCards').snapshotChanges();
  }


  getWifiById(id: string) {

    // return this.fs.collection('Wifi_&_SimCards').doc(wID).get();
    //console.log(this.fs.collection("Wifi_&_SimCards").doc(wID).get())
    
      return this.fs.doc('Wifi_&_SimCards/'+id).get().toPromise().then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:");
      });

    // }
  }
}

 //return this.fs.collection<Wifi>('Wifi_&_SimCards').doc(docId).snapshotChanges;
    //return this.fs.doc('Wifi_&_SimCards/'+docId).get()

  //this.fs.collection('Wifi_&_SimCards').doc(docId).get().then(snapshot => snapshot.data())


  //const [userDetails, setUserDetails] = useState('')