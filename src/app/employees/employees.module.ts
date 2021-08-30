import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeesComponent,
    EditEmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule
  ]
})
export class EmployeesModule { }
