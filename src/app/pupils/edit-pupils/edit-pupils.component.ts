import { Component, OnInit } from '@angular/core';
import { PupilsService } from '../pupils.service';
import pupil from '../pupils';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';




@Component({
  selector: 'app-edit-pupils',
  templateUrl: './edit-pupils.component.html',
  styleUrls: ['./edit-pupils.component.css']
})
export class EditPupilsComponent implements OnInit {
  id: string | null = "";
  pupil : Observable<pupil | undefined> = of(undefined);
  constructor(private service: PupilsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pupil = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.getDetailsPupil(params.get("id"))));
  }

}
