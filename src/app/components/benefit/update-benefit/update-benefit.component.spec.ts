import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBenefitComponent } from './update-benefit.component';

describe('UpdateBenefitComponent', () => {
  let component: UpdateBenefitComponent;
  let fixture: ComponentFixture<UpdateBenefitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBenefitComponent]
    });
    fixture = TestBed.createComponent(UpdateBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
