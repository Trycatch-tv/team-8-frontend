import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStudentComponent } from './details-student.component';

describe('DetailsStudentComponent', () => {
  let component: DetailsStudentComponent;
  let fixture: ComponentFixture<DetailsStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
