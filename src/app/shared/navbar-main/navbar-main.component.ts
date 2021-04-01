import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { WorkspaceResponse } from 'src/app/manager-app/manager-interfaces/managerApp.interface';
import { ManagerAppService } from 'src/app/manager-app/services/manager-app.service';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent implements OnInit {

  public inputFlag: boolean = false
  get workspaces() {
    return this.managerAppService._workspaces;
  }
  @ViewChild('refModal') modal!:ElementRef<HTMLDivElement>;
  @ViewChild('refOverlay') overlay!:ElementRef<HTMLDivElement>;
  @ViewChild('refModalInput') modalInput!:ElementRef<HTMLInputElement>;
  constructor(private authService: AuthService, private managerAppService: ManagerAppService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.authLogOut();
  }
  onGetTitle(val:string):void {
    
    const titleWorkspace = val.trim();
    
    if(!titleWorkspace.length) {
      this.inputFlag = true;
      return;
    }
    const inputVal = this.modalInput.nativeElement;
    const body = {
      title: inputVal.value
    }
    // this.todoApp.createWorkspace(val)
    this.managerAppService.createWorkspace(body).subscribe((resp: WorkspaceResponse ) => {
      
      this.managerAppService._workspaces = [...this.workspaces, resp.workspace[resp.workspace.length - 1]]
    })
    inputVal.value = ''
    //CLOSE THE MODAL 
    // console.log(this.modalInput.nativeElement.value)
    this.closeModal();
  }
  closeModal(): void {
    const modalElement = this.modal.nativeElement;
    const overlay = this.overlay.nativeElement;
    modalElement.classList.add('hidden');
    overlay.classList.add('hidden'); 
  }

  onAddWorkspace(){
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

}
