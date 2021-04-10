import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WorkspaceResponse } from '../../manager-interfaces/managerApp.interface';
import { ManagerAppService } from '../../services/manager-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public inputFlag!: boolean;


  @ViewChild('refModal') modal!:ElementRef<HTMLDivElement>;
  @ViewChild('refOverlay') overlay!:ElementRef<HTMLDivElement>;
  @ViewChild('refModalInput') modalInput!:ElementRef<HTMLInputElement>;
  constructor(private managerApp:ManagerAppService) { 
    // this.getWorkspaces(`Bearer ${localStorage.getItem('bearer-todo')}`);
  }

  ngOnInit(): void {
  }
  // getWorkspaces(){
  //   this.managerApp.getWorkspace().subscribe((resp:WorkspaceResponse )=> {
  //     this.managerApp._workspaces = resp.workspace;
  //   });
  // }

  // onAddWorkspace(){
  //   const modalElement = this.modal.nativeElement;
  //   const overlay = this.overlay.nativeElement;

  //   modalElement.classList.remove('hidden');
  //   overlay.classList.remove('hidden');
  //   document.addEventListener('keydown', (e) => {
  //     if( e.key === 'Escape' && !modalElement.classList.contains('hidden')){
  //       this.closeModal();
  //     }
  //   })
  // }

  // closeModal(): void {
  //   const modalElement = this.modal.nativeElement;
  //   const overlay = this.overlay.nativeElement;
  //   modalElement.classList.add('hidden');
  //   overlay.classList.add('hidden'); 
  // }

  // onGetTitle(val:string):void {

  //   const titleWorkspace = val.trim();


  //   if(!titleWorkspace.length) {
  //     this.inputFlag = true;
  //     return;
  //   }
  //   const inputVal = this.modalInput.nativeElement;
  //   // this.todoApp.createWorkspace(val)
  //   this.managerApp.createWorkspace(inputVal.value).subscribe((resp: WorkspaceResponse ) => {
      
  //     this.managerApp._workspaces = [...this.workspaces, resp.workspace[resp.workspace.length - 1]]
  //   })
  //   inputVal.value = ''
  //   //CLOSE THE MODAL 
  //   // console.log(this.modalInput.nativeElement.value)
  //   this.closeModal();
  // }

}