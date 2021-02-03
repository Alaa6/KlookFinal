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
) { }

ngOnInit() {
  this.authser.user.subscribe(user => {
    if(user){
    this.isuser=false
    console.log(user)
    }
    else
    this.isuser=true;
  })
}

logout(){
  this.authser.logout()
}

}
