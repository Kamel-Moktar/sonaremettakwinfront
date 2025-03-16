import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangPswComponent } from './chang-psw.component';

describe('ChangPswComponent', () => {
  let component: ChangPswComponent;
  let fixture: ComponentFixture<ChangPswComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangPswComponent]
    });
    fixture = TestBed.createComponent(ChangPswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
