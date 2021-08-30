import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PupilsComponent } from './pupils/pupils.component';
import { EditPupilsComponent } from './edit-pupils/edit-pupils.component';

const routes: Routes = [{ path: 'pupils', component: PupilsComponent },
                        { path: 'pupil/:id', component: EditPupilsComponent }
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PupilsRoutingModule { }
