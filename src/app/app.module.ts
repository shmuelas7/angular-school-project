import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeachersModule } from './teachers/teachers.module';
import { EmployeesModule } from './employees/employees.module';
import { PupilsModule } from './pupils/pupils.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeachersModule,
    EmployeesModule,
    PupilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
