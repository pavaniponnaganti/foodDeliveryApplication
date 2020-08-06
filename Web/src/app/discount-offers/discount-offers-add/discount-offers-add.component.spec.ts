import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountOffersAddComponent } from './discount-offers-add.component';

describe('DiscountOffersAddComponent', () => {
  let component: DiscountOffersAddComponent;
  let fixture: ComponentFixture<DiscountOffersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountOffersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountOffersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
