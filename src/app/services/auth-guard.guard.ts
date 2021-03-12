import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { promises } from 'dns';
// import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
// import { AuthService } from 'src/app/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private auth:AuthService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (this.auth.userLogin) {
      this.router.navigate(['/sign/admin/adminlogin'])

      return false;
    } else {
      return true;

    }

  }








  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean> | Promise<boolean> {
  
  // //  dd:new promise
  //   return new Promise(resolve => {
  //   this.auth.user.subscribe(user => {

  //     if(user) resolve(true);
  //     else this.router.navigate(['/sign/signup'])

  //   })
  //  })
    
  // }

  
}
