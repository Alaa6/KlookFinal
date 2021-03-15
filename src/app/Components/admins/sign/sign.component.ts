import { Component, OnInit } from '@angular/core'
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { User } from '../../../viewModels/user'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'
// import { Guid } from "guid-typescript";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  insertForm: FormGroup

  loginFrm: FormGroup
  list: User[] = []
  errorMsg: string = ''
  loginBool: boolean = false
  signbool: boolean = false
  userType: string = 'user'
  users: User[] = []
  Signn: string = 'Sign Up'
  userId: string = ''

  Password = new FormControl('', [Validators.required, Validators.minLength(5)])
  Email = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.email,
    Validators.maxLength(100),
  ])

  getErrorMessage() {
    return 'You must enter the right value'
  }
  listadd: User = { Email: '', Password: '', Name: '' }
  signupp() {
    ////old////
    this.listadd = this.insertForm.value
    // this.listadd.Email=this.Email.value;
    // this.listadd.Password=this.Password.value;
    // this.listadd.Name=this.Password.value;
    this.listadd.JoinDate = Date.now()

    console.log(this.listadd)
    console.log(this.listadd.Email)
    console.log(this.listadd.Password)
    console.log(this.listadd.Name)
    this.authSer
      .signup(this.listadd)
      .then((result) => {
        this.errorMsg = ''
        // localStorage.setItem('currentUser',result.user?.uid);

        // localStorage.setItem('currentUserName', this.listadd.Name);
        // this.authSer.userLogin=false
        // this.router.navigate(['/']);
        this.authSer
          .addUser(result.user?.uid, this.listadd)

          .then(() => {
            localStorage.setItem('currentUser', result.user?.uid)
            localStorage.setItem('currentUserName', this.listadd.Name)
            localStorage.setItem('currentUserEmail', this.listadd.Email)

            this.authSer.userLogin = false
            // this.router.navigate(['/'])
            window.history.back()

            // window.location.reload()
          })
          .catch((errr) => console.log(errr))
      })
      .catch((err) => {
        this.errorMsg = err.message
      })
    ////old////

    ////// new ////////////
    // this.listadd=this.insertForm.value;
    // // this.listadd.Email=this.Email.value;
    // // this.listadd.Password=this.Password.value;
    // // this.listadd.Name=this.Password.value;
    // this.listadd.JoinDate=Date.now()

    // console.log(this.listadd)
    // console.log(this.listadd.Email)
    // console.log(this.listadd.Password)
    // console.log(this.listadd.Name)

    // this.authSer.addUser(this.listadd).then(res=>{
    //   this.userId=res;
    //   this.authSer.userId=this.userId;
    //   localStorage.setItem('currentUser',this.userId);
    //   localStorage.setItem('currentUserName', this.listadd.Name);
    //   this.authSer.userLogin=false
    //   // this.authSer.userLogin=false

    //   // console.log(res)
    //   this.router.navigate(['/']);

    // })
    // .catch(err =>
    //   {
    //     console.log("errrrrorrr"+err)
    //   })
    ////// new ////////////
  }
  constructor(
    private router: Router,
    private authSer: AuthService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {
    this.loginFrm = this.fb.group({})
  }

  ngOnInit(): void {
    this.insertForm = this.fb.group({
      Email: new FormControl('',[Validators.required,Validators.email]),
      Password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      Name: new FormControl('',[Validators.required, Validators.minLength(6)]),
    })
  }

  username: User = {}
  login() {
    /////old ////
    this.listadd = this.insertForm.value

    this.authSer
      .login(this.listadd.Email, this.listadd.Password)
      .then((result) => {
        this.errorMsg = ''
        this.authSer
          .loginUser(this.listadd.Email, this.listadd.Password)
          .subscribe(
            (res) => {
              // test@tset.com
              console.log(res.length < 1)
              this.errorMsg = 'this user is no longer Exist'

              this.list = res.map((data) => {
                this.userId = data.payload.doc.id
                this.username = data.payload.doc.data()
                console.log(this.username.Name)
                this.authSer.userId = this.userId
                localStorage.setItem('currentUser', this.userId)
                localStorage.setItem('currentUserName', this.username.Name)
                localStorage.setItem('currentUserEmail', this.username.Email)

                this.authSer.userLogin = false

                console.log(this.userId)
                console.log(this.username.Name)

                // console.log(this.userId)
                // this.router.navigate(['/'])
                this.authSer.userLogin = false
                window.history.back()

                // this.authSer.userLogin=true
                console.log(this.authSer.userLogin)

                return {
                  id: data.payload.doc.id,
                  ...data.payload.doc.data(),
                }
              })
              // this.loading = false
            },
            (err) => {
              console.log(err)

              this.errorMsg = 'this user is no longer Exist'
            },
          )
        // console.log(this.list)
      })
      .catch((err) => {
        this.errorMsg = err.message

        console.log(err)
      })

    /////old ////
    //     this.listadd=this.insertForm.value;
    //     // this.listadd.Email=this.Email.value;
    //     // this.listadd.Password=this.Password.value;
    //     // this.listadd.Name=this.Password.value;
    //     this.listadd.JoinDate=Date.now()

    //     console.log(this.listadd)
    //     console.log(this.listadd.Email)
    //     console.log(this.listadd.Password)
    //     console.log(this.listadd.Name)

    //     this.authSer.login(this.listadd.Email,this.listadd.Password).subscribe((res) => {

    //       this.list = res.map(data => {
    //         this.userId=data.payload.doc.id
    //         this.username=data.payload.doc.data()
    //         this.authSer.userId=this.userId
    //       localStorage.setItem('currentUser', this.userId);
    //       localStorage.setItem('currentUserName', this.username.Name);
    //       this.authSer.userLogin=false

    // console.log(this.userId)
    // console.log(this.username.Name)

    //         // console.log(this.userId)
    //       this.router.navigate(['/']);
    //       this.authSer.userLogin=false

    //       // this.authSer.userLogin=true
    //       console.log(this.authSer.userLogin)

    //         return {
    //           id: data.payload.doc.id,
    //           ...data.payload.doc.data()
    //         }
    //       });
    //       // this.loading = false
    //     }, (err) => console.log(err))
    //     console.log(this.list)
  }
  subsign: string = ''

  routeSubscription: Subscription = this.activatedRoute.paramMap.subscribe(
    (params: ParamMap) => {
      //if  the route parameter value  changes  (Observable)

      this.subsign = String(params.get('subsign'))

      if (this.subsign == 'login') {
        this.loginBool = true
        this.signbool = false
        this.Signn = 'Log In'
      } else {
        this.loginBool = false
        this.signbool = true
        this.Signn = 'Sign Up'
      }
    },
  )
}
