import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvoiceDetailComponent } from './add-invoice-detail.component';

describe('AddInvoiceDetailComponent', () => {
  let component: AddInvoiceDetailComponent;
  let fixture: ComponentFixture<AddInvoiceDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInvoiceDetailComponent]
    });
    fixture = TestBed.createComponent(AddInvoiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
