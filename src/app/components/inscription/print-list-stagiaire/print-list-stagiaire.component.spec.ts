import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintListStagiaireComponent } from './print-list-stagiaire.component';

describe('PrintListStagiaireComponent', () => {
  let component: PrintListStagiaireComponent;
  let fixture: ComponentFixture<PrintListStagiaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintListStagiaireComponent]
    });
    fixture = TestBed.createComponent(PrintListStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
