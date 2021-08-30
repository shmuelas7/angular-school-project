import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeesComponent } from './employees/employees/employees.component';
import { PupilsComponent } from './pupils/pupils/pupils.component';
import { TeachersComponent } from './teachers/teachers/teachers.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'pupils', component: PupilsComponent },
  { path: 'teachers', component: TeachersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
