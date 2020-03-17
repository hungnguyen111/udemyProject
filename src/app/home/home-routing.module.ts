import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DetailComponent } from './detail/detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', component: TrangchuComponent},
      {path: 'trang-chu', component: TrangchuComponent},
      {path: 'detail', component: DetailComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'profile', component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
