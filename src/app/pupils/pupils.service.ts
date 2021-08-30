import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import pupil from './pupils';
import { pupils } from './dumi-data-pupils';

@Injectable({
  providedIn: 'root'
})
export class PupilsService {

  constructor() { }
  public getPupils(): Observable<pupil[]> {
    return of (pupils)
  }

  public getDetailsPupil(id: string | null): Observable<pupil | undefined> {
    for (const pupil of pupils) {
      if (pupil.id === id) {
        return of(pupil);
      }
    }
    return of(undefined);
  }
}
