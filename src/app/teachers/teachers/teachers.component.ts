import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers.service';
import teachers from '../teachers';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {


    public teachersArr: teachers[] = [];
  
    constructor(private teacherService: TeachersService) { }
  
    ngOnInit(): void {
      this.teacherService.getTeachers().subscribe(teachers => this.teachersArr = teachers);
    }
  }
