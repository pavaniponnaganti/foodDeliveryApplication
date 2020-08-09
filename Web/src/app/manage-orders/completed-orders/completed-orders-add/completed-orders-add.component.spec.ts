import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedOrdersAddComponent } from './completed-orders-add.component';

describe('CompletedOrdersAddComponent', () => {
  let component: CompletedOrdersAddComponent;
  let fixture: ComponentFixture<CompletedOrdersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedOrdersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedOrdersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
