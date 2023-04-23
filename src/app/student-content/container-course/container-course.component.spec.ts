import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCourseComponent } from './container-course.component';

describe('ContainerCourseComponent', () => {
  let component: ContainerCourseComponent;
  let fixture: ComponentFixture<ContainerCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
