import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from './../viewModels/user';
// import { User as FirebaseUser } from 'firebase'
import firebase from "firebase/app"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  itemss: Observable<User[]>;
  user:Observable<firebase.User|null>

  // user:Observable<firebase.>
  constructor(private afAuth : AngularFireAuth,private fb:AngularFirestore) { 
    this.user = afAuth.user
    this.itemss=this.fb.collection<User>('user').valueChanges();

  }

  signup(email:string , password:string){

    return this.afAuth.createUserWithEmailAndPassword(email,password)
  }

  login(email:string,password:string){

    return this.afAuth.signInWithEmailAndPassword(email,password)
  }

  checkforAdmin(email:string,password:string){

    // this.itemss=this.fb.collection<User>('user').valueChanges();
    return this.itemss
  }
  addUser(id:any,Name:string,Email:string,type:string){

    return this.fb.doc('user/'+id).set({
      Name : Name,
      Email : Email,
      Type:type

    })

  }

  logout(){
    return this.afAuth.signOut();
  }


}
