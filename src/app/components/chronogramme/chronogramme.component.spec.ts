import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronogrammeComponent } from './chronogramme.component';

describe('ChronogrammeComponent', () => {
  let component: ChronogrammeComponent;
  let fixture: ComponentFixture<ChronogrammeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChronogrammeComponent]
    });
    fixture = TestBed.createComponent(ChronogrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
