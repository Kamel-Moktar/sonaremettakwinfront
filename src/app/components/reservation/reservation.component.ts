import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StagiaireService} from "../../services/stagiaire/stagiaire.service";
import {ReservationService} from "../../services/reservation/reservation.service";
import {SessionService} from "../../services/session/session.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DatePipe} from "@angular/common";
import * as XLSX from "xlsx";
import {InscriptionService} from "../../services/inscription/inscription.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  inscriptions?: any[];
  title: any = 'Reservation d\'hôtel';
  sessions: any[] = []
  session: any
  stagiaire: any
  favoriteBooking :any



  fg1: FormGroup = this.fb.group({
    name: [""],
    theme: [""],
    dd: [""]
  })
  private closeResult: any = "";
  public stagiaires: any[] = [];

  constructor(
    private stagiaireService: StagiaireService,
    public inscriptionService: InscriptionService,
    private sessionService: SessionService,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private activateRoute: ActivatedRoute,
    private reservationService:ReservationService
  ) {
  }

  ngOnInit(): void {

    this.sessionService.getAll().subscribe((ss:any) => {
      this.sessions = ss
    })
    let session_id = this.activateRoute.snapshot.url[1].path


    if (session_id != "0") {
      this.sessionService.getById(session_id).subscribe((res:any) => {
        this.session = res
        this.showSession()
        this.refresh()
      })

      this.reservationService.getFavoriteBooking(session_id).subscribe(res=>{
        this.favoriteBooking=res
      })
    }
  }

  refresh(): void {
    this.inscriptionService.getAllBySession(this.session.id).subscribe(
      (res:any) => {
        this.inscriptions = res
      })

    this.reservationService.getFavoriteBooking(this.session.id).subscribe((res:any)=>{
      this.favoriteBooking=res
    })
  }






  onDetail(a: any) {
    this.router.navigateByUrl("detail-reservation/" + a.id)
  }


  onSearch() {
    this.refresh()
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
    this.refresh()

  }

  openModal(content: any) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: "lg"}).result.then((result) => {
      this.session = result;
      this.showSession()
    }, (reason) => {
      this.closeResult = `Dismissed ${ReservationComponent.getDismissReason(reason)}`;
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


  onSearchSession() {
    this.sessionService.getAllParam({
      name: this.fg1.value.name,
      theme: this.fg1.value.theme,
      date: this.fg1.value.dd
    }).subscribe((res:any)=> {
      this.sessions = res
    })
  }


}

