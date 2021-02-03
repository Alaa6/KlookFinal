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
  // itemss: Observable<User[]>;
  user:Observable<firebase.User|null>

  // user:Observable<firebase.>
  constructor(private afAuth : AngularFireAuth,private fb:AngularFirestore) { 
    this.user = afAuth.user
    // this.itemss=this.fb.collection<User>('user').valueChanges();

  }

  signup(email:string , password:string){

    return this.afAuth.createUserWithEmailAndPassword(email,password)
  }

  login(email:string,password:string){

    return this.afAuth.signInWithEmailAndPassword(email,password)
  }

  checkforAdmin(email:string,password:string){

    return this.fb.collection<User>('user', ref => ref.where('Email', '==', email).where('Password', '==', password))
    .valueChanges();
        // this.itemss=this.fb.collection<User>('user').valueChanges();

    // return this.itemss
  }
  addUser(id:any,Email:string,Password:string,type:string){

    return this.fb.doc('user/'+id).set({
      Password : Password,
      Email : Email,
      Type:type,
      JoinDate:Date.now()

    })

  }

  logout(){
    return this.afAuth.signOut();
  }

  getalluser(){
    
    return this.fb.collection<User>('user' ,ref => ref.where( 'Type' , '==', 'user' ))
    .snapshotChanges();

  }

  getalladmin(){
    
    return this.fb.collection<User>('user' ,ref => ref.where( 'Type' , '==', 'admin' ))
    .snapshotChanges();

  }

  deleteCoffeeOrder(id:string) {
    return this.fb.collection("user").doc(id).delete();
    this.afAuth.currentUser
  }

}
