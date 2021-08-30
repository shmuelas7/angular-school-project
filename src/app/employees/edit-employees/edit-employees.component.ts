import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service'; 
import employees from '../employees';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {

  id: string | null = "";
  employees : Observable<employees | undefined> = of(undefined);
  constructor(private service: EmployeesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employees = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.getDetailsemployees(params.get("id"))));
  }

}
