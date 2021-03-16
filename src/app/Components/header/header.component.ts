import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Pipe, PipeTransform } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { LanguageServiceService } from 'src/app/services/language-service.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  public isMenuCollapsed = true

  isuser: boolean = true

  //

  ngOnInit() {
    if (this.authser.userLogin == true) {
      this.isuser = true
    } else {
      this.isuser = false
    }
    // this.authser.user.subscribe(user => {
    //   if (user) {
    //     this.isuser = false
    //     // console.log(user)s
    //   }
    //   else
    //     this.isuser = true;
    // })
    // if(this.authser.userLogin==true){
    //   console.log("trueeeee")
    //   this.isuser=true

    // }
    // else
    // {
    //   console.log("falseee")
    //   this.isuser=false;

    // }
    // this.authser.user.subscribe(user => {
    //   if(user){
    //   this.isuser=false

    // }
    //   else
    //   this.isuser=true;
    // })
  }
  constructor(
    private router: Router,
    private authser: AuthService,
    private languageService: LanguageServiceService,
    private translate: TranslateService,
  ) {
    // if (localStorage.getItem("currentUser") === null) {
    //   this.isuser=true
    // }
    // else{
    //   this.isuser=false

    // }
    if (this.authser.userLogin == true) {
      this.isuser = true
    } else {
      this.isuser = false
    }

    this.translate.use(languageService.getLanguage())
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.authser.userLogin == true) {
      this.isuser = true
    } else {
      this.isuser = false
    }
  }

  // ngOnInit() {

  // }

  logout() {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentUserName')
    localStorage.removeItem('currentUserEmail')
    console.log(this.authser.userLogin)
    this.authser.userLogin = true
    console.log(this.authser.userLogin)

    // this.router.navigate(['/'])
    // window.history.back()
    // window.location.reload()
    this.router.navigate(['/'])

    // this.router.navigate(['/conditions'])
  }
  changeLanguage() {
    window.location.reload()
    this.languageService.setLanguage(
      this.languageService.getLanguage() == 'ar' ? 'en' : 'ar',
    )
    this.translate.use(this.languageService.getLanguage())
  }
}
