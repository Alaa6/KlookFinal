import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isuser:boolean=true

  constructor(private authser : AuthService,
) { 

  if(this.authser.userLogin==true){
    console.log("trueeeee")
  }
  else
  {
    console.log("falseee")

  }
}

ngOnInit() {
  
  if(this.authser.userLogin==true){
    console.log("trueeeee")
    this.isuser=true

  }
  else
  {
    console.log("falseee")
    this.isuser=false;


  }
  this.authser.user.subscribe(user => {
    if(user){
    this.isuser=false

  }
    else
    this.isuser=true;
  })
}

logout(){
  this.authser.logout()
}

}
