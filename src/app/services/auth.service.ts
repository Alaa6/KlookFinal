import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
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
export class AuthService implements OnChanges {
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
    console.log(this.userLogin)
    this.user = afAuth.user
    // this.userLogin=false
    // this.itemss=this.fb.collection<User>('user').valueChanges();

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (localStorage.getItem("currentUser") === null) {
      this.userLogin=true
    }
    else{
      this.userLogin=false

    }
  }

  signup(user:User){
    //old////
    return this.afAuth.createUserWithEmailAndPassword(user.Email,user.Password)
    //old////


  }

  login(email:string,password:string){
    //old////
    return this.afAuth.signInWithEmailAndPassword(email,password);
    //old////

   
  }

  loginUser(email:string,password:string){
   
    // console.log("auth",email,password);
    this.userLogin=false;

    return this.fb.collection<User>('users', ref => ref.where('Email', '==', email).where('Password', '==', password))
    .snapshotChanges();
    
     
  }
  
  checkforAdmin(email:string,password:string){

    return this.fb.collection<User>('admins', ref => ref.where('Email', '==', email).where('Password', '==', password))
    .snapshotChanges();
  
  }
  
  userId:string=''
  
  addUser(id:string,itemm:User){

    ////old////

    return this.fb.doc('users/'+id).set({
      Password : itemm.Password,
      Email : itemm.Email,
      Date:itemm.JoinDate,
      Name:itemm.Name
      // Type:type,
      // JoinDate:Date.now()
  })

    ////old////

    // return this.fb.collection('users').add(itemm).then(function (docRef) {
    //   console.log("Document written with ID: ", docRef.id);
    //  return docRef.id;
    // })
    //   .catch(function (error) {
    //     console.error("Error adding document: ", error);
    //     return "error"
    //   });

      


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
