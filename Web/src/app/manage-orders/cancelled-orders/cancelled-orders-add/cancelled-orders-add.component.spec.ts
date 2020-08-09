import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledOrdersAddComponent } from './cancelled-orders-add.component';

describe('CancelledOrdersAddComponent', () => {
  let component: CancelledOrdersAddComponent;
  let fixture: ComponentFixture<CancelledOrdersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelledOrdersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledOrdersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
