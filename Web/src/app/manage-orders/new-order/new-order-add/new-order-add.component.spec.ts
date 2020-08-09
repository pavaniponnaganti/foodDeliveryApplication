import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderAddComponent } from './new-order-add.component';

describe('NewOrderAddComponent', () => {
  let component: NewOrderAddComponent;
  let fixture: ComponentFixture<NewOrderAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrderAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
