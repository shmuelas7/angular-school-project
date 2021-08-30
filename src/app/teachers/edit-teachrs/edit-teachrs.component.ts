import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import teacher from '../teachers';
import { TeachersService } from '../teachers.service';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-edit-teachrs',
  templateUrl: './edit-teachrs.component.html',
  styleUrls: ['./edit-teachrs.component.css']
})
export class EditTeachrsComponent implements OnInit {

  id: string | null = "";
  teacher: Observable<teacher | undefined> = of(undefined);
  constructor(private service: TeachersService,
              private route: ActivatedRoute)
  { }



  ngOnInit(): void {
    this.teacher = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.getDetails(params.get("id"))));

  }

}
