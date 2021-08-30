import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import employees from './employees';
import { employeess } from './dumi-data-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }
  public getemployees(): Observable<employees[]> {
    return of (employeess)
  }

  public getDetailsemployees(id: string | null): Observable<employees | undefined> {
    for (const employees of employeess) {
      if (employees.id === id) {
        return of(employees);
      }
    }
    return of(undefined);
  }
}

