import {Component} from '@angular/core';
import {SessionService} from "../../services/session/session.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PhaseService} from "../../services/phase/phase.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.css']
})
export class PhaseComponent {


  title: any = 'Phase '
  phases: any;
  session: any
  sessions: any[] = []
  private closeResult = "";
  fg: FormGroup = this.fb.group({
    name: [""],
    theme: [""],
    dd: [""]
  })

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private phaseService: PhaseService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.sessionService.getAll().subscribe(ss => {
      this.sessions = ss
    })
    let session_id = this.activateRoute.snapshot.url[1].path
    if (session_id != "0") {
      this.sessionService.getById(session_id).subscribe(res => {
        this.session = res
        this.showSession()
        this.refresh()
      })
    }


  }

  refresh() {

    this.phaseService.getAllBySession(this.session.id).subscribe(
      (ph) => {
        this.phases = ph

      })

  }


  onUpdate(a: any) {
    this.router.navigateByUrl("update-phase/" + a.id)

  }

  onDelete(a: any): void {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {
      this.phaseService.delete(a).subscribe(() => {
        this.refresh()
      })
    }
  }


  onAdd() {
    this.router.navigateByUrl("add-phase/" + this.session.id)
  }

  showSession() {
    let name = document.getElementById("name");
    let theme = document.getElementById("theme");
    let startDate = document.getElementById("startDate");
    let endDate = document.getElementById("endDate");
    let nbrStagPlanned = document.getElementById("nbrStagPlanned");
    if (name) name.setAttribute("value", this.session.name)
    if (theme) theme.setAttribute("value", this.session.action.name)
    if (startDate) startDate.setAttribute("value", <string>this.datePipe.transform(this.session.startDate, "dd/MM/YYYY"))
    if (endDate) endDate.setAttribute("value", <string>this.datePipe.transform(this.session.endDate, "dd/MM/YYYY"))
    if (nbrStagPlanned) nbrStagPlanned.setAttribute("value", this.session.nbrStagPlanned)

    this.phaseService.getAllBySession(this.session.id).subscribe(
      (ph) => {
        this.phases = ph

      })
  }

  openModal(content: any) {


    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: "lg"}).result.then((result) => {
      this.session = result;
      this.showSession()
    }, (reason) => {
      this.closeResult = `Dismissed ${PhaseComponent.getDismissReason(reason)}`;
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


  onSearch() {

    this.sessionService.getAllParam({
      name: this.fg.value.name,
      theme: this.fg.value.theme,
      date: this.fg.value.dd
    }).subscribe(res => {
      this.sessions = res
    })
  }

  onRetour() {
    this.router.navigateByUrl("session")
  }
}



