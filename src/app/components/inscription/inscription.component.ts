import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DatePipe} from "@angular/common";
import {SessionService} from "../../services/session/session.service";
import {InscriptionService} from "../../services/inscription/inscription.service";
import {StagiaireService} from "../../services/stagiaire/stagiaire.service";
import * as XLSX from "xlsx";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  inscriptions?: any[];
  title: any = 'Inscription';
  sessions: any[] = []
  session: any
  stagiaire: any
  fg: FormGroup = this.fb.group(
    {
      familyName: [""],
      firstName: [""],
      birthDay: [""],
      customer: [""]

    }
  );


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
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.onSearchStagiaire()
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

  refresh(): void {
    this.inscriptionService.getAllBySession(this.session.id).subscribe(
      res => {
        this.inscriptions = res
      })
  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {

      this.inscriptionService.delete(a).subscribe(() => {
        this.refresh()
      })
    }
  }

  onUpdate(a: any) {
    this.router.navigateByUrl("update-stagiaire/" + a.stagiaire.id+"/"+a.id)
  }


  onDetail(a: any) {
    // this.router.navigateByUrl("detail-stagiaire/" + a.id)
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
      this.closeResult = `Dismissed ${InscriptionComponent.getDismissReason(reason)}`;
    });
  }

  openModalStagiaire(content: any) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: "lg"}).result.then((result) => {

      if(result=='add'){
        this.router.navigateByUrl("add-stagiaire/"+this.session.id)
      }else {

        this.stagiaire = result;


        let exist = false
        this.inscriptions?.forEach(i => {
          if (i.stagiaire.id == this.stagiaire.id) exist = true
        })
        if (!exist) {
          this.inscriptionService.add({
            stagiaire: this.stagiaire,
            session: this.session
          }).subscribe(() => {
              this.refresh()
            }
          )
        } else alert("Stagiaire déjà inscrit dans cette session")
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${InscriptionComponent.getDismissReason(reason)}`;
    })
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
    }).subscribe(res => {
      this.sessions = res
    })
  }

  onSearchStagiaire() {
    this.stagiaireService.getParam({
      familyName: this.fg.value.familyName,
      firstName: this.fg.value.firstName,
      birthDay: this.fg.value.birthDay,
      customer: this.fg.value.customer
    }).subscribe(
      res => {
        this.stagiaires = res
      })
  }

  onRetour() {

    this.router.navigateByUrl("session")
  }



  onUpdateDeclencheur(a:any) {
    this.router.navigateByUrl("declencheur/"+a.id)
  }

  onUpdateArriveDate(a:any) {
    this.router.navigateByUrl("update-arrive-date/"+a.id)
  }

  openExportList() {
    let element = document.getElementById('listeTable');
    const ws = XLSX.utils.table_to_sheet(element);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Liste");
    const filename = "liste des stagiaires.xlsx";
    XLSX.writeFile(wb, filename);
  }

  openPrintList() {
    this.router.navigateByUrl("printlist/"+this.session.id)
  }

  onAtestation(a: any) {
    this.router.navigateByUrl("attestation/"+a.id)
  }
}

