import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMyCourseComponent } from './detail-my-courses.component';

describe('DetailMyCourseComponent', () => {
  let component: DetailMyCourseComponent;
  let fixture: ComponentFixture<DetailMyCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMyCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
