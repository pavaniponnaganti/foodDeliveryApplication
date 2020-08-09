import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningOrdersAddComponent } from './running-orders-add.component';

describe('RunningOrdersAddComponent', () => {
  let component: RunningOrdersAddComponent;
  let fixture: ComponentFixture<RunningOrdersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningOrdersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningOrdersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
