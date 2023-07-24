import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCoursesComponent } from './table-courses.component';

describe('TableCoursesComponent', () => {
  let component: TableCoursesComponent;
  let fixture: ComponentFixture<TableCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
