import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInvoiceDetailComponent } from './update-invoice-detail.component';

describe('UpdateInvoiceDetailComponent', () => {
  let component: UpdateInvoiceDetailComponent;
  let fixture: ComponentFixture<UpdateInvoiceDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInvoiceDetailComponent]
    });
    fixture = TestBed.createComponent(UpdateInvoiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
