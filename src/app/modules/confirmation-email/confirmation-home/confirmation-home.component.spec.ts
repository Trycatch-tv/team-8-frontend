import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationHomeComponent } from './confirmation-home.component';

describe('ConfirmationHomeComponent', () => {
  let component: ConfirmationHomeComponent;
  let fixture: ComponentFixture<ConfirmationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
