import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePriceComponent } from './update-price.component';

describe('UpdatePriceComponent', () => {
  let component: UpdatePriceComponent;
  let fixture: ComponentFixture<UpdatePriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePriceComponent]
    });
    fixture = TestBed.createComponent(UpdatePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
