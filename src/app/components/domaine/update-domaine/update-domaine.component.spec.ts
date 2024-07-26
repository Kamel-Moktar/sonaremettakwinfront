import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDomaineComponent } from './update-domaine.component';

describe('UpdateDomaineComponent', () => {
  let component: UpdateDomaineComponent;
  let fixture: ComponentFixture<UpdateDomaineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDomaineComponent]
    });
    fixture = TestBed.createComponent(UpdateDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
