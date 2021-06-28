import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupkpiuserComponent } from './groupkpiuser.component';

describe('GroupkpiuserComponent', () => {
  let component: GroupkpiuserComponent;
  let fixture: ComponentFixture<GroupkpiuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupkpiuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupkpiuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
