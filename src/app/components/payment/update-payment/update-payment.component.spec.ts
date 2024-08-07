import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdatePaymentComponent} from './update-payment.component';

describe('UpdatePaymentComponent', () => {
  let component: UpdatePaymentComponent;
  let fixture: ComponentFixture<UpdatePaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePaymentComponent]
    });
    fixture = TestBed.createComponent(UpdatePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
