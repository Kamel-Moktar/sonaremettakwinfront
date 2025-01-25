import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStgaireComponent } from './search-stgaire.component';

describe('SearchStgaireComponent', () => {
  let component: SearchStgaireComponent;
  let fixture: ComponentFixture<SearchStgaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchStgaireComponent]
    });
    fixture = TestBed.createComponent(SearchStgaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
