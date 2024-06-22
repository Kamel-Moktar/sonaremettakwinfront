import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintProformaComponent } from './print-proforma.component';

describe('PrintProformaComponent', () => {
  let component: PrintProformaComponent;
  let fixture: ComponentFixture<PrintProformaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintProformaComponent]
    });
    fixture = TestBed.createComponent(PrintProformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
