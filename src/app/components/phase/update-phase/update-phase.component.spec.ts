import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdatePhaseComponent} from './update-phase.component';

describe('UpdatePhaseComponent', () => {
  let component: UpdatePhaseComponent;
  let fixture: ComponentFixture<UpdatePhaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePhaseComponent]
    });
    fixture = TestBed.createComponent(UpdatePhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
