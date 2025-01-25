import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationDispositifComponent } from './realisation-dispositif.component';

describe('RealisationDispositifComponent', () => {
  let component: RealisationDispositifComponent;
  let fixture: ComponentFixture<RealisationDispositifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealisationDispositifComponent]
    });
    fixture = TestBed.createComponent(RealisationDispositifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
