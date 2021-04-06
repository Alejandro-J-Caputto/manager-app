import {  Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Draggable, DragTarget } from '../../manager-interfaces/drag-drop.interface';
import { AddTodoResponse, DeleteTodoList, IsDoneTodo, Todo } from '../../manager-interfaces/managerApp.interface';
import { WorkspaceViewComponent } from '../../pages/workspace-view/workspace-view.component';
import { ManagerAppService } from '../../services/manager-app.service';

@Component({
  selector: 'app-todolist-card',
  templateUrl: './todolist-card.component.html',
  styleUrls: ['./todolist-card.component.scss']
})
export class TodolistCardComponent implements OnInit, Draggable, DragTarget {
  
  private workspaceID!:string;
  public isActive:boolean = false;
  get todoLists() {
    return this.managerAppService.globaltodoListTest;
  }

  @ViewChild('refModal') modal!:ElementRef<HTMLDivElement>;
  @ViewChild('refOverlay') overlay!:ElementRef<HTMLDivElement>;
  @ViewChild('refModalInput') modalInput!:ElementRef<HTMLInputElement>;
  @ViewChild('todoListCard') todoListCard!: ElementRef<HTMLDivElement>;

  @Input('dataName') name = '';
  @Input('dataTodos') todos:Todo [] = [];
  @Input('todoListID') todoListID:string = '';
  

  constructor(private managerAppService: ManagerAppService, private activatedRoute: ActivatedRoute, private workSpaceView: WorkspaceViewComponent) {
    this.workSpaceView.getParam();
   }

  ngOnInit(): void {
    this.scrollUp();
  }

  addTodoToList (todo:HTMLInputElement){
    const currentCard = todo.closest('.todoList-card');
    console.log(currentCard!.id)

    //Work around for an issue, dont like it must be refactired. 
    if(this.todos === undefined) {
      this.todos = []
    }
     this.managerAppService.createTodo(todo.value, currentCard!.id).subscribe((resp:AddTodoResponse) => {
      if(this.todos.length) {
        this.todos = [...this.todos, resp.newTodo]
      }
      if(!this.todos.length) {
        this.todos.push(resp.newTodo);
      }
    });
    todo.value = '';
  }
  // CHANGE STATUS TO DONE
  isDone(id:string){
    this.managerAppService.changeIsDoneTodo(id).subscribe((resp:IsDoneTodo)=> {
      this.todos.forEach((todo:Todo, index:number) => {
        if(this.todos[index]['_id'] === id) {
          todo.done = resp.todoDone.done
        }
      })
    })
  }

  onChangeTodo(val:string, idCard:string){
    this.managerAppService.patchTodo(val, idCard).subscribe((resp) => {
      // console.log(resp)
    })
    this.isActive = false;
  }

    handleIsActive(){
    this.isActive = true;
  }

  changeTodoListName(updateName:string) {
    console.log(updateName)
    this.managerAppService.patchTodoListName(updateName, this.todoListID)
      .subscribe(resp => {
        console.log(resp)
      })
  }
  
  //DELETE TODOLIST & CLOSE MODAL
  deleteTodoList(){

    this.managerAppService.deleteTodoListByID(this.todoListID).subscribe((resp:DeleteTodoList) => {
  
      console.log(this.todoLists)
      if(resp.status === 'success') {
        const filteredTodoLists = [...this.managerAppService.globaltodoListTest].filter(el => el._id !== this.todoListID);
        this.managerAppService.globaltodoListTest = filteredTodoLists;
        // this.managerAppService.todoListTest = filteredTodoLists
      }

    })
    this.closeModal();
  }

  closeModal(): void {
    const modalElement = this.modal.nativeElement;
    const overlay = this.overlay.nativeElement;
    modalElement.classList.add('hidden');
    overlay.classList.add('hidden');
    
  }

  //OPEN MODAL
  todoListModal(){
    const modalElement = this.modal.nativeElement;
    const overlay = this.overlay.nativeElement;

    modalElement.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.addEventListener('keydown', (e) => {
      if( e.key === 'Escape' && !modalElement.classList.contains('hidden')){
        this.closeModal();
      }
    })
  }

  scrollUp(){
    window.scrollTo(0,0)
  }

  //DRAG

  dragStartHandler(event: any) {
    console.log('drag start')
    const todoID = event.target.id;
    // SET THE TODO ID TO THE HANDLER
    event.dataTransfer!.setData('text/plain', todoID);

    // ON MOVE
    event.dataTransfer!.effectAllowed = 'move';
  }

  dragEndHandler(event:any) {
    // console.log(event)
    // console.log('drag end')
  }
  //DROP
  dragOverHandler(event: any) {
    //VALIDATES THE TYPE OF DATA 
    if(event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault();
      // console.log('you are over me')
      this.todoListCard.nativeElement.classList.add('drop-drop')
    }

  }
  dragLeaveHandler(event: any) {

    this.todoListCard.nativeElement.classList.remove('drop-drop')
  }

  dropHandler(event: any) {
    console.log('dropped');
    this.todoListCard.nativeElement.classList.remove('drop-drop');
    const todoID = event.dataTransfer!.getData('text/plain');
    this.managerAppService.dragDropTodo(todoID, this.todoListID).subscribe((resp:any) => {
      // this.todos = [...this.todos, resp.updatedTodo];
      this.workSpaceView.getTodoList();
    },(error) => {
      console.log(error)
    })

    console.log(this.workspaceID)
  }


  //EVENT BINDING


}
