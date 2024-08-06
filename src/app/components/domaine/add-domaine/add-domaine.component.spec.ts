import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddDomaineComponent} from './add-domaine.component';

describe('AddDomaineComponent', () => {
  let component: AddDomaineComponent;
  let fixture: ComponentFixture<AddDomaineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDomaineComponent]
    });
    fixture = TestBed.createComponent(AddDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
