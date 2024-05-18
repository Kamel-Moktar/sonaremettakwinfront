import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailAceminementComponent } from './update-detail-aceminement.component';

describe('UpdateDetailAceminementComponent', () => {
  let component: UpdateDetailAceminementComponent;
  let fixture: ComponentFixture<UpdateDetailAceminementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDetailAceminementComponent]
    });
    fixture = TestBed.createComponent(UpdateDetailAceminementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
