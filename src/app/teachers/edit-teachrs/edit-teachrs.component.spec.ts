import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeachrsComponent } from './edit-teachrs.component';

describe('EditTeachrsComponent', () => {
  let component: EditTeachrsComponent;
  let fixture: ComponentFixture<EditTeachrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeachrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeachrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
