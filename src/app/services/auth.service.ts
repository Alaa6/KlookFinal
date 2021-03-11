import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from './../viewModels/user';
// import { User as FirebaseUser } from 'firebase'
import firebase from "firebase/app"
import { BooleanInput } from '@angular/cdk/coercion';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // itemss: Observable<User[]>;
  user:Observable<firebase.User|null>

  userLogin:boolean
  
  
userid:string=''
  // user:Observable<firebase.>
  constructor(private afAuth : AngularFireAuth,private fb:AngularFirestore) { 
    if (localStorage.getItem("currentUser") === null) {
      this.userLogin=true
    }
    else{
      this.userLogin=false

    }
    this.user = afAuth.user
    // this.userLogin=false
    // this.itemss=this.fb.collection<User>('user').valueChanges();

  }

  signup(email:string , password:string){
    ////old////
    // return this.afAuth.createUserWithEmailAndPassword(email,password)
    ////old////


  }

  login(email:string,password:string){
    ////old////
    // return this.afAuth.signInWithEmailAndPassword(email,password)
    ////old////

    // this.userLogin=true;
    // console.log("auth",email,password);
    return this.fb.collection<User>('users', ref => ref.where('Email', '==', email).where('Password', '==', password))
    .snapshotChanges()
    



  }
  
  checkforAdmin(email:string,password:string){

    return this.fb.collection<User>('admins', ref => ref.where('Email', '==', email).where('Password', '==', password))
    .snapshotChanges();
  
  }
  
  userId:string=''
  
  addUser(itemm:User){

    ////old////

    // return this.fb.doc('user/'+id).set({
    //   Password : Password,
    //   Email : Email,
    //   Type:type,
    //   JoinDate:Date.now()
  // })

    ////old////

    return this.fb.collection('users').add(itemm).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
     return docRef.id;
    })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        return "error"
      });

      


  }


  addAdmin(itemm:User){

 

    return this.fb.collection('admins').add(itemm).then(function (docRef) {
      console.log("admin added with ID: ", docRef.id);
     return docRef.id;
    })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        return "error"
      });

      


  }

  logout(){
    ////old////
    return this.afAuth.signOut();
    ////old////


  }

  getalluser(){
    
    ///////old ////////////////////
    // return this.fb.collection<User>('user' ,ref => ref.where( 'Type' , '==', 'user' ))
    // .snapshotChanges();
    ///////old ////////////////////
    return this.fb.collection<User>('users')
    .snapshotChanges();

  }

  getalladmin(){
    
    return this.fb.collection<User>('admins')
    .snapshotChanges();

  }

  getbyID(idd:string){
    // const [userDetails, setUserDetails] = useState('')
return this.fb.collection('users').doc(idd).get()
        // .then(snapshot => setUserDetails(snapshot.data()))

  }

  deleteAdmin(id:string) {
    return this.fb.collection("admins").doc(id).delete();
    // this.afAuth.currentUser
  }

  deleteuser(id:string) {
    return this.fb.collection("users").doc(id).delete();
    // this.afAuth.currentUser
  }

  itemDoc?: AngularFirestoreDocument<User>;

      updateAdmin(item: User){
        
        // console.log(item)
        // console.log(item.id)
        this.itemDoc = this.fb.doc(`admins/${item.id}`);
        this.itemDoc.update(item);
      }


      updateUsers(item: User){
        
        // console.log(item)
        // console.log(item.id)
        this.itemDoc = this.fb.doc(`users/${item.id}`);
        this.itemDoc.update(item);
      }
}
