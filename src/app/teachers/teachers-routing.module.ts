import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers/teachers.component';
import { EditTeachrsComponent } from './edit-teachrs/edit-teachrs.component';

const routes: Routes = [
  { path: 'teachers', component: TeachersComponent },
  { path: 'teachers/:id', component: EditTeachrsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
