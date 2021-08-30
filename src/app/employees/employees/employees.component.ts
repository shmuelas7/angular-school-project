import { Component, OnInit } from '@angular/core';
import employees from '../employees';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employeesArr: employees[] = [];
  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getemployees().subscribe(employeess => this.employeesArr = employeess);
  }

}
