import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionService} from "../../../services/session/session.service";
import {ActionService} from "../../../services/action/action.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-update-session',
  templateUrl: './update-session.component.html',
  styleUrls: ['./update-session.component.css']
})
export class UpdateSessionComponent {

  closeResult = ""
  title: String = "Nouvelle Session de formation ";


  formGroup: FormGroup = this.fb.group({
    name: ["", Validators.required],
    dd: ["", Validators.required],
    df: ["", Validators.required],
    nbrStagPlanned: [12, Validators.required]



  })

  fg: FormGroup = this.fb.group({
    name: [""],
    domaine: [""]
  })
  footer: any = "";
  actions: any[] = [];
  selectedAction: any
  selected: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sessionService: SessionService,
    private actionService: ActionService,
    private modalService: NgbModal,
    private activateRoute :ActivatedRoute
  ) {


  }

  ngOnInit() {
    this.actionService.getAll().subscribe(res => {//est une prog asynchrone pour éviter le blocage
      this.actions = res
    })
   let sessionId =this.activateRoute.snapshot.url[1].path
    this.sessionService.getById(sessionId).subscribe(res=>{
      this.selected=res

      this.formGroup= this.fb.group({
        name: [this.selected.name, Validators.required],
        dd: [this.selected.startDate, Validators.required],
        df: [this.selected.endDate, Validators.required],
        nbrStagPlanned: [this.selected.nbrStagPlanned, Validators.required]
      })

      this.selectedAction=this.selected.action
      let action = document.getElementById("action");
      if (action) action.setAttribute("value", this.selectedAction.name)
    })




  }

  onValidate() {

    if (this.formGroup.valid && this.selectedAction) {
      this.sessionService.update({
        id:this.selected.id,
        name: this.formGroup.value.name,
        startDate: this.formGroup.value.dd,
        endDate: this.formGroup.value.df,
        nbrStagPlanned: this.formGroup.value.nbrStagPlanned,
        action: this.selectedAction

      }).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez remplir les rebiques requis")


  }

  onCancel() {
    this.router.navigateByUrl("session")
  }


  onSearch() {
    this.actionService.getAllParam({name: this.fg.value.name, domainName: this.fg.value.domaine}).subscribe(res => {//est une prog asynchrone pour éviter le blocage
      this.actions = res
    })
  }

  openModal(content: any) {


    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: "lg"}).result.then((result) => {
      this.selectedAction = result;
      let action = document.getElementById("action");
      if (action) action.setAttribute("value", this.selectedAction.name)
    }, (reason) => {
      this.closeResult = `Dismissed ${UpdateSessionComponent.getDismissReason(reason)}`;
    });
  }

  static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



  addDays(date: Date, days: number): Date {
    let result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
  }

  calculeDateFin(){
    if(this.selectedAction){
      let df = new Date(this.formGroup.value.dd)
      let dure=this.selectedAction.duration
      let rest =dure%5
      let nbrSemaine=(dure-rest)/5
      df=this.addDays(df,nbrSemaine*7+rest)

      let s: string = df.toString()
      let year = df.getFullYear()
      let month = df.getMonth()+1
      let day = df.getDate()
      let d = year + "-"+(month>9?month:"0"+month)+ "-" + (day>9?day:"0"+day)

      this.formGroup = this.fb.group({
        name: [this.formGroup.value.name, Validators.required],
        dd: [this.formGroup.value.dd, Validators.required],
        df: [d, Validators.required],
        nbrStagPlanned: [this.formGroup.value.nbrStagPlanned, Validators.required]

      })

    }

  }
}

