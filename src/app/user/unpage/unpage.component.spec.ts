import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpageComponent } from './unpage.component';

describe('UnpageComponent', () => {
  let component: UnpageComponent;
  let fixture: ComponentFixture<UnpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
