import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAttachementComponent } from './print-attachement.component';

describe('PrintAttachementComponent', () => {
  let component: PrintAttachementComponent;
  let fixture: ComponentFixture<PrintAttachementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintAttachementComponent]
    });
    fixture = TestBed.createComponent(PrintAttachementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
