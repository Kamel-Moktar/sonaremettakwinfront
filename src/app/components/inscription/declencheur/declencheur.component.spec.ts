import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclencheurComponent } from './declencheur.component';

describe('DeclencheurComponent', () => {
  let component: DeclencheurComponent;
  let fixture: ComponentFixture<DeclencheurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeclencheurComponent]
    });
    fixture = TestBed.createComponent(DeclencheurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
