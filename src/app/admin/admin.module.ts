import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, DashboardComponent, LoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class AdminModule { }
