import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetlistuserComponent } from './targetlistuser.component';

describe('TargetlistuserComponent', () => {
  let component: TargetlistuserComponent;
  let fixture: ComponentFixture<TargetlistuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetlistuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetlistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
