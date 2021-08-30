import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers/teachers.component';
import { FormsModule } from '@angular/forms';
import { EditTeachrsComponent } from './edit-teachrs/edit-teachrs.component';


@NgModule({
  declarations: [
    TeachersComponent,
    EditTeachrsComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    FormsModule

  ]
})
export class TeachersModule { }
