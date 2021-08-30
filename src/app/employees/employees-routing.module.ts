import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';

const routes: Routes = [{ path: 'employees', component: EmployeesComponent },
{ path: 'employees/:id', component:EditEmployeesComponent  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
