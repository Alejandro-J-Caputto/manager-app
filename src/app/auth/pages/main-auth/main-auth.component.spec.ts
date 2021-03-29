import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAuthComponent } from './main-auth.component';

describe('MainAuthComponent', () => {
  let component: MainAuthComponent;
  let fixture: ComponentFixture<MainAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
