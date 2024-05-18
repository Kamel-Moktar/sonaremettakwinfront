import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcheminementComponent } from './add-acheminement.component';

describe('AddAcheminementComponent', () => {
  let component: AddAcheminementComponent;
  let fixture: ComponentFixture<AddAcheminementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAcheminementComponent]
    });
    fixture = TestBed.createComponent(AddAcheminementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
