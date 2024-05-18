import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAcheminementComponent } from './detail-acheminement.component';

describe('DetailAcheminementComponent', () => {
  let component: DetailAcheminementComponent;
  let fixture: ComponentFixture<DetailAcheminementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailAcheminementComponent]
    });
    fixture = TestBed.createComponent(DetailAcheminementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
