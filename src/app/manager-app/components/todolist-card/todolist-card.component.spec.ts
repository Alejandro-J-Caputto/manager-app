import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistCardComponent } from './todolist-card.component';

describe('TodolistCardComponent', () => {
  let component: TodolistCardComponent;
  let fixture: ComponentFixture<TodolistCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
