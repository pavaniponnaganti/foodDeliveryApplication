import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMembersAddComponent } from './staff-members-add.component';

describe('StaffMembersAddComponent', () => {
  let component: StaffMembersAddComponent;
  let fixture: ComponentFixture<StaffMembersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMembersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMembersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
