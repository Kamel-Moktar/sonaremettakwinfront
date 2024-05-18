import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncasementComponent } from './encasement.component';

describe('EncasementComponent', () => {
  let component: EncasementComponent;
  let fixture: ComponentFixture<EncasementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncasementComponent]
    });
    fixture = TestBed.createComponent(EncasementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
