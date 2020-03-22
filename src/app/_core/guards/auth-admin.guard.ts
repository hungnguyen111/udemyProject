import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(){
    if(localStorage.getItem("UserAdmin")){
      //cho phép đi tới đường dẫn cho admin
      return true
    }
    this.router.navigate(["admin"])
    return false;
  }
  
}
