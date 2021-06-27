import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresslistuserComponent } from './progresslistuser.component';

describe('ProgresslistuserComponent', () => {
  let component: ProgresslistuserComponent;
  let fixture: ComponentFixture<ProgresslistuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgresslistuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresslistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
