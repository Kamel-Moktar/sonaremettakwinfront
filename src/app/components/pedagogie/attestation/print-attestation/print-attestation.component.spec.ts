import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAttestationComponent } from './print-attestation.component';

describe('PrintAttestationComponent', () => {
  let component: PrintAttestationComponent;
  let fixture: ComponentFixture<PrintAttestationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintAttestationComponent]
    });
    fixture = TestBed.createComponent(PrintAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
