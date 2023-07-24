import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTeachersComponent } from './table-teachers.component';

describe('TableTeachersComponent', () => {
  let component: TableTeachersComponent;
  let fixture: ComponentFixture<TableTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTeachersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
