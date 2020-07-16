import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningOrdersComponent } from './running-orders.component';

describe('RunningOrdersComponent', () => {
  let component: RunningOrdersComponent;
  let fixture: ComponentFixture<RunningOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
