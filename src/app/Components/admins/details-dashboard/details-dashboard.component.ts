import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { Tours } from 'src/app/viewModels/tours';
import { User } from 'src/app/viewModels/user';
// import { User } from './../../../viewModels/user';

@Component({
  selector: 'app-details-dashboard',
  templateUrl: './details-dashboard.component.html',
  styleUrls: ['./details-dashboard.component.scss']
})
export class DetailsDashboardComponent implements OnInit {

  loginFrm: FormGroup;
  list: Tours = {};
  dataSource: User[] = [];
  dataSourceadmin: User[] = [];
  displayedColumns: string[] = ['Email', 'JoinDate', 'Delete'];
  displayedColumnsadmin: string[] = ['Email', 'JoinDate', 'Delete'];

  signBool: boolean = false;
  btnAdmiText = 'Add Admin'

  constructor(private router: Router, private authSer: AuthService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private TourServies: RelaxServiceService) {

    this.authSer.getalluser().subscribe(data => {

      this.dataSource = data.map(elementt => {
        console.log(elementt.payload.doc.id)

        return {
          id: elementt.payload.doc.id,
          ...elementt.payload.doc.data()
        }
      })


    });

    this.authSer.getalladmin().subscribe(data => {

      this.dataSourceadmin = data.map(elementt => {
        return {
          id: elementt.payload.doc.id,
          ...elementt.payload.doc.data()
        }
      })
      // console.log(this.dataSource)

    });
    // this.authSer.getbyID(id)

    this.loginFrm = fb.group({

      id: ['']
      , Booked: ['']
      , Categories: ['']
      , City: ['']
      , Date: ['']
      , Image: ['']
      , OldPrice: ['']
      , Price: ['']
      , Rate: ['']
      , Review: ['']
      , Section: ['']
      , Title: ['']
      , TourDiscount: ['']
      , TourSectionInner: ['']



    });
  }

  ngOnInit(): void {

  }


  add() {
    this.list = this.loginFrm.value
    console.log(this.loginFrm.value)
    console.log(this.list)
    this.TourServies.addToTours(this.list)

  }

  //////////////////////////////////// admin signup ////////////////////

  listUser: User = { Password: '', Email: '', Type: '' }
  errorMsg: string = ''
  userType: string = 'user'
  users: User[] = []

  // users: Iuser[] =[]


  Password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  Email = new FormControl('', [Validators.required, Validators.minLength(6), Validators.email, Validators.maxLength(100)]);

  getErrorMessage() {
    if (this.Email.hasError('') || this.Password.hasError('')) {
      return 'You must enter a value';
    }

    return this.Email.hasError('email') ? 'Not a valid email' : '';
  }
  // list:Iuser={}
  listadd: User = { Email: '', Password: '', Type: '' }

  signupp() {

    // console.log(this.listUser.Password)
    // console.log(this.listUser.Email)
    this.authSer.signup(this.Email.value, this.Password.value)
      .then(result => {
        console.log(result.user?.uid)
        this.errorMsg = '';
        this.authSer.addUser(result.user?.uid, this.Email.value, this.Password.value, "admin")
          .then(() => {
            // this.router.navigate(['/']);
            console.log('doneeee')
          }).catch(errr => console.log(errr))

        console.log(result)

      })
      .catch(err => {

        // console.log(err)
        this.errorMsg = err.message

      })

    // console.log(this.listadd)
    // console.log(this.Password.value)
    // console.log(this.Email.value)
    // this.userSer.adduser(this.listadd)

  }




  //////////////////////////////////// admin signup end ////////////////////

  ///////////////////////// coustmer ////////////////


  delete(id: string) {
    this.authSer.deleteCoffeeOrder(id);
    console.log(this.dataSource)
    // console.log('delete'+c)
  }
  ///////////////////////// coustmer end ////////////////


  sign() {
    this.signBool = !this.signBool
    if (this.signBool == true) {
      this.btnAdmiText = 'Show Admin'
    }
    else this.btnAdmiText = 'Add Admins'
  }
}