import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAraveDateComponent } from './update-arave-date.component';

describe('UpdateAraveDateComponent', () => {
  let component: UpdateAraveDateComponent;
  let fixture: ComponentFixture<UpdateAraveDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAraveDateComponent]
    });
    fixture = TestBed.createComponent(UpdateAraveDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
