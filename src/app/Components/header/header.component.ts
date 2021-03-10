import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LanguageServiceService } from 'src/app/services/language-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;

  isuser: boolean = true

// 

ngOnInit() {
  // this.authser.user.subscribe(user => {
  //   if (user) {
  //     this.isuser = false
  //     // console.log(user)s
  //   }
  //   else
  //     this.isuser = true;
  // })
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
  constructor(private authser: AuthService, private languageService: LanguageServiceService, private translate: TranslateService
  ) {
    if(this.authser.userLogin==true){
      console.log("trueeeee")
    }
    else
    {
      console.log("falseee")
  
    }
    this.translate.use(languageService.getLanguage());
  }

  // ngOnInit() {
  
  // }

  logout() {
    this.authser.logout()
  }
  changeLanguage() {
    window.location.reload();
    this.languageService.setLanguage(this.languageService.getLanguage() == 'ar' ? 'en' : 'ar');
    this.translate.use(this.languageService.getLanguage());
  }

}
