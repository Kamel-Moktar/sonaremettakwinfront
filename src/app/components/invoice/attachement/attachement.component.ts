import {Component} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";

import {FormBuilder, FormGroup} from "@angular/forms";
import {StagiaireService} from "../../../services/stagiaire/stagiaire.service";
import {InscriptionService} from "../../../services/inscription/inscription.service";
import {SessionService} from "../../../services/session/session.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DatePipe} from "@angular/common";
import {InvoiceDetailService} from "../../../services/invoice-detail/invoice-detail.service";
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {BenefitService} from "../../../services/benefit/benefit.service";
import {group} from "@angular/animations";

@Component({
  selector: 'app-attachement',
  templateUrl: './attachement.component.html',
  styleUrls: ['./attachement.component.css']
})
export class AttachementComponent {

  dropdownList:any = [];
  dropdownSettings:IDropdownSettings={};



  invoiceDetails?: any[];
  title: any = 'Inscription';
  sessions: any[] = []
  session: any
  stagiaire: any
  invoice_id: any
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
    private invoiceDetailService: InvoiceDetailService,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private activateRoute: ActivatedRoute,
    private benefitService:BenefitService
  ) {
  }

  ngOnInit(): void {
    this.refreshSession()
    this.invoice_id = this.activateRoute.snapshot.url[1].path

    this.benefitService.getAll().subscribe(
      res=>{
        this.dropdownList=res
      }

    )


    this.dropdownSettings = {
      idField: 'id',
      textField: 'designation',
    }
  }

  refresh(): void {
    this.invoiceDetailService.getInvoice(this.invoice_id).subscribe(
      res=>{
        this.invoiceDetails=res
      }
    )
  }





  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer cette ligne ?")) {

      this.inscriptionService.delete(a).subscribe(() => {
        this.refresh()
      })
    }
  }

  onUpdate(a: any) {
    this.router.navigateByUrl("update-stagiaire/" + a.stagiaire.id + "/" + a.id)
  }


  onDetail(a: any) {
    // this.router.navigateByUrl("detail-stagiaire/" + a.id)
  }


  onSearch() {
    this.refresh()
  }

  traitement(session :any){
  console.log(session.fg.value.benefits)
  }

  openModal(content: any) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: "lg"}).result.then((result) => {
      this.session = result;
      this.traitement(result)
    }, (reason) => {
      this.closeResult = `Dismissed ${AttachementComponent.getDismissReason(reason)}`;
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
    }).subscribe(res => {
      this.sessions = res
    })
  }


  onRetour() {
    this.router.navigateByUrl("invoice-detail/" + this.invoice_id)
  }

  refreshSession() {
    this.sessionService.getAll().subscribe(ls => {
      this.sessions = []
      ls.forEach((e: any) => {
          this.sessions.push({
            session: e,
            fg: this.fb.group({
              benefits: [],

            })
          })
        }
      )
    })
  }


}




