import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomesliderComponent } from './welcomeslider.component';

describe('WelcomesliderComponent', () => {
  let component: WelcomesliderComponent;
  let fixture: ComponentFixture<WelcomesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomesliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
