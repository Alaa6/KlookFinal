import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/viewModels/user';
import { DialogAdminComponent } from '../dialog-admin/dialog-admin.component';

@Component({
  selector: 'app-admin-sign',
  templateUrl: './admin-sign.component.html',
  styleUrls: ['./admin-sign.component.scss']
})
export class AdminSignComponent implements OnInit {
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

constructor(private router:Router
  // ,public dialogRef: MatDialogRef<DialogAdminComponent>
,private authSer:AuthService,
) { 

// dialogRef.disableClose=true
}


ngOnInit(): void {
}

openadmin(){
console.log(this.Email.value,this.Age.value)
this.authSer.checkforAdmin(this.Email.value,this.Age.value).subscribe((res) => {

this.list = res.map(data => {
  this.userId=data.payload.doc.id
  console.log(this.userId)
    // this.dialogRef.close();
    this.authSer.userLogin=true
    this.router.navigate(['sign/admin/dash']);


  return {
    id: data.payload.doc.id,
    ...data.payload.doc.data()
  }
});
}, (err) => console.log(err))

}

}