import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspacesAllComponent } from './workspaces-all.component';

describe('WorkspacesAllComponent', () => {
  let component: WorkspacesAllComponent;
  let fixture: ComponentFixture<WorkspacesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspacesAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspacesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
