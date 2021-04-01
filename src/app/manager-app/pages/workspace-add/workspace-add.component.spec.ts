import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceAddComponent } from './workspace-add.component';

describe('WorkspaceAddComponent', () => {
  let component: WorkspaceAddComponent;
  let fixture: ComponentFixture<WorkspaceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
