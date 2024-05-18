import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuseAcheminementComponent } from './accuse-acheminement.component';

describe('AccuseAcheminementComponent', () => {
  let component: AccuseAcheminementComponent;
  let fixture: ComponentFixture<AccuseAcheminementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccuseAcheminementComponent]
    });
    fixture = TestBed.createComponent(AccuseAcheminementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
