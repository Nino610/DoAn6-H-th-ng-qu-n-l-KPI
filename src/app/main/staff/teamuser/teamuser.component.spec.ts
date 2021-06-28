import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamuserComponent } from './teamuser.component';

describe('TeamuserComponent', () => {
  let component: TeamuserComponent;
  let fixture: ComponentFixture<TeamuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
