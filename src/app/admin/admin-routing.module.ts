import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthAdminGuard } from '../_core/guards/auth-admin.guard';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: '', component: LoginComponent},
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthAdminGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
