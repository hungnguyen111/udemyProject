import { NgModule } from '@angular/core';

import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';


const material = [
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatProgressBarModule
]

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
