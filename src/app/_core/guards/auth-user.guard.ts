import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(){
    if(localStorage.getItem('UserGuest')){
      //Cho phép đi tới đường dẫn dành cho user khách
      return true;
    }
    this.router.navigate([''])
    return false;
  }
  
}
