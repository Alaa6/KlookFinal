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

  isuser: boolean = true

  constructor(private authser: AuthService, private languageService: LanguageServiceService, private translate: TranslateService
  ) {
    this.translate.use(languageService.getLanguage());
  }

  ngOnInit() {
    this.authser.user.subscribe(user => {
      if (user) {
        this.isuser = false
        // console.log(user)s
      }
      else
        this.isuser = true;
    })
  }

<<<<<<< HEAD
changeLang(lang:any){
  // console.log(lang);
  localStorage.setItem('lang', lang);
  window.location.reload();
}

logout(){
  this.authser.logout()
}
=======
  logout() {
    this.authser.logout()
  }
  changeLanguage() {
    window.location.reload();
    this.languageService.setLanguage(this.languageService.getLanguage() == 'ar' ? 'en' : 'ar');
    this.translate.use(this.languageService.getLanguage());
  }
>>>>>>> 07aaf41603d8dc0e7f86e626b11d78ba9c07f6c8

}
