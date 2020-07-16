import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCitiesAddComponent } from './manage-cities-add.component';

describe('ManageCitiesAddComponent', () => {
  let component: ManageCitiesAddComponent;
  let fixture: ComponentFixture<ManageCitiesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCitiesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCitiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
