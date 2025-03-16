import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAllAttestationsComponent } from './print-all-attestations.component';

describe('PrintAllAttestationsComponent', () => {
  let component: PrintAllAttestationsComponent;
  let fixture: ComponentFixture<PrintAllAttestationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintAllAttestationsComponent]
    });
    fixture = TestBed.createComponent(PrintAllAttestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
