import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder ,FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/viewModels/user';

@Component({
  selector: 'app-dialog-admin',
  templateUrl: './dialog-admin.component.html',
  styleUrls: ['./dialog-admin.component.scss']
})
export class DialogAdminComponent implements OnInit {
  Email= new FormControl('',[Validators.required,Validators.minLength(6),Validators.email,Validators.maxLength(100)]);
      Age= new FormControl('',[Validators.required]);
     
list:User[]=[]
userId:string=''

      
  getErrorMessage() {
    if (this.Email.hasError('')|| this.Age.hasError('')) {
      return 'You must enter a value';
    }

    return this.Email.hasError('email') ? 'Not a valid email' : '';
  }
 
  constructor(private router:Router,public dialogRef: MatDialogRef<DialogAdminComponent>
    ,private authSer:AuthService,
    ) { 

    dialogRef.disableClose=true
  }


  ngOnInit(): void {
  }

  openadmin(){
    console.log(this.Email.value,this.Age.value)
  this.authSer.checkforAdmin(this.Email.value,this.Age.value).subscribe((res) => {

    this.list = res.map(data => {
      this.userId=data.payload.doc.id
      console.log(this.userId)
        this.dialogRef.close();


      return {
        id: data.payload.doc.id,
        ...data.payload.doc.data()
      }
    });
  }, (err) => console.log(err))

 }

}



