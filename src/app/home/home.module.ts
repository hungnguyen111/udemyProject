import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DetailComponent } from './detail/detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { CourseComponent } from './course/course.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, TrangchuComponent, DetailComponent, CheckoutComponent, HeaderComponent, FooterComponent, ListCourseComponent, CourseComponent, ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class HomeModule { }
