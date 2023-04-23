import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTeacherComponent } from './sidebar-teacher.component';

describe('SidebarTeacherComponent', () => {
  let component: SidebarTeacherComponent;
  let fixture: ComponentFixture<SidebarTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
