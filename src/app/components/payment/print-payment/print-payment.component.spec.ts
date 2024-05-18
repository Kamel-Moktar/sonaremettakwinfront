import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPaymentComponent } from './print-payment.component';

describe('PrintPaymentComponent', () => {
  let component: PrintPaymentComponent;
  let fixture: ComponentFixture<PrintPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintPaymentComponent]
    });
    fixture = TestBed.createComponent(PrintPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
