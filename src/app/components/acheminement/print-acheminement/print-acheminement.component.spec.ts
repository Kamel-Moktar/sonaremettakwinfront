import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAcheminementComponent } from './print-acheminement.component';

describe('PrintAcheminementComponent', () => {
  let component: PrintAcheminementComponent;
  let fixture: ComponentFixture<PrintAcheminementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintAcheminementComponent]
    });
    fixture = TestBed.createComponent(PrintAcheminementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
