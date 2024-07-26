import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhaseComponent } from './add-phase.component';

describe('AddPhaseComponent', () => {
  let component: AddPhaseComponent;
  let fixture: ComponentFixture<AddPhaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPhaseComponent]
    });
    fixture = TestBed.createComponent(AddPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
