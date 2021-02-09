import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../../viewModels/user';
import { FormGroup, FormBuilder ,FormControl, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  loginFrm:FormGroup;
list:User={Password:'',Email:'',Type:''}
errorMsg:string=''
loginBool:boolean = false;
signbool:boolean = false;
userType:string='user'
users:User[]=[]
Signn:string='Sign Up'


    Password=new FormControl('',[Validators.required,Validators.minLength(5)]);
      Email= new FormControl('',[Validators.required,Validators.minLength(6),Validators.email,Validators.maxLength(100)]);

  getErrorMessage() {
      return 'You must enter the right value';
    
  }
  listadd:User={Email:'',Password:'',Type:''}
  signupp(){
 
    console.log(this.list.Password)
    console.log(this.list.Email)
    this.authSer.signup(this.Email.value,this.Password.value)
      .then(result => {
        console.log(result.user?.uid)
        this.errorMsg='';
        this.authSer.addUser(result.user?.uid,this.Email.value,this.Password.value,"user")
        .then(()=>{
          this.router.navigate(['/']);
        }).catch(errr=>console.log(errr))
  
        console.log(result)
      
      })
      .catch(err => {
        
        // console.log(err)
        this.errorMsg=err.message
      
      } )
  
    console.log(this.listadd)
    console.log(this.Password.value)
    console.log(this.Email.value)
    // this.userSer.adduser(this.listadd)
    
  }
  constructor(private router:Router,private authSer: AuthService,private fb: FormBuilder,private activatedRoute: ActivatedRoute) {
    this.loginFrm=this.fb.group({
     
     
    });
   }

  ngOnInit(): void {

    
  }
  
  login(){
    this.authSer.login(this.Email.value,this.Password.value)
    .then(result=>
      {
        
        this.errorMsg='';
        this.authSer.checkforAdmin(this.Email.value,this.Password.value).subscribe(items => {
        this.users=items
        console.log(items)
        console.log(items[0].Type)
        if(items[0].Type=="user"){
        this.router.navigate(['/']);
        console.log("user  "+ items[0].Type)

        }
        else
        {
          console.log("admin")
        this.router.navigate(['/sign/admin/dash']);

        }
      });
        console.log(result)
        
      })
    .catch(err=>
      {
        this.errorMsg=err.message

      console.log(err)
      
      
      })  }


      subsign: string = '';

   routeSubscription: Subscription = this.activatedRoute.paramMap.subscribe((params: ParamMap) => {    //if  the route parameter value  changes  (Observable) 

    this.subsign = String(params.get('subsign'))

    if(this.subsign=='login'){
    this.loginBool=true
    this.signbool=false
    this.Signn ='Log In'
    }
    else 
    {
      this.loginBool=false
      this.signbool=true
      this.Signn ='Sign Up'
      }

  })
}

