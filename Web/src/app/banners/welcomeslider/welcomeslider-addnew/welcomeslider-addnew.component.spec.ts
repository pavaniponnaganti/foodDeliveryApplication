import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomesliderAddnewComponent } from './welcomeslider-addnew.component';

describe('WelcomesliderAddnewComponent', () => {
  let component: WelcomesliderAddnewComponent;
  let fixture: ComponentFixture<WelcomesliderAddnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomesliderAddnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomesliderAddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
