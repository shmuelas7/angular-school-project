import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { teachers } from './dami-data-teachers';
import teacher from './teachers';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor() { }


  public getTeachers(): Observable<teacher[]> {
    return of(teachers)
  }


  public getDetails(id: string|null): Observable<teacher| undefined>  {
    for (const teacher of teachers) {
      if (teacher.id == id) {
        return of(teacher);
      }
    }
    return of (undefined);
  }
}