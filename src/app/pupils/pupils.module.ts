import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PupilsRoutingModule } from './pupils-routing.module';
import { PupilsComponent } from './pupils/pupils.component';
import { EditPupilsComponent } from './edit-pupils/edit-pupils.component';


@NgModule({
  declarations: [
    PupilsComponent,
    EditPupilsComponent
  ],
  imports: [
    CommonModule,
    PupilsRoutingModule,
    FormsModule
  ]
})
export class PupilsModule { }
