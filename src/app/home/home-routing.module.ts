import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DetailComponent } from './detail/detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthUserGuard } from '../_core/guards/auth-user.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', component: TrangchuComponent},
      {path: 'trang-chu', component: TrangchuComponent},
      {path: 'detail/:id', component: DetailComponent},
      {path: 'login', component: LoginComponent},
      {path: 'checkout', component: CheckoutComponent, canActivate: [AuthUserGuard]},
      {path: 'profile', component: ProfileComponent, canActivate: [AuthUserGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
