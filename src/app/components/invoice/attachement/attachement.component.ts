import {Component} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";

import {FormBuilder, FormGroup} from "@angular/forms";
import {StagiaireService} from "../../../services/stagiaire/stagiaire.service";
import {InscriptionService} from "../../../services/inscription/inscription.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DatePipe} from "@angular/common";
import {InvoiceDetailService} from "../../../services/invoice-detail/invoice-detail.service";
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {BenefitService} from "../../../services/benefit/benefit.service";
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {PhaseService} from "../../../services/phase/phase.service";

@Component({
  selector: 'app-attachement',
  templateUrl: './attachement.component.html',
  styleUrls: ['./attachement.component.css']
})
export class AttachementComponent {
  title: any = 'Attachement Facture ';
  dropdownList: any = [];
  dropdownSettings: IDropdownSettings = {
    idField: 'id',
    textField: 'name'
  };


  invoiceDetails?: any[];
  inscriptions?: any[];
  sessions: any[] = []
  distinctSessions: any[] = []
  session: any
  stagiaire: any
  invoice_id: any
  invoice: any;
  customer: any
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
    private invoiceService: InvoiceService,
    private invoiceDetailService: InvoiceDetailService,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private activateRoute: ActivatedRoute,
    private benefitService: BenefitService,
    private phaseService: PhaseService
  ) {
  }

  ngOnInit(): void {

    this.invoice_id = this.activateRoute.snapshot.url[1].path


    this.invoiceService.getInvoiceById(this.invoice_id).subscribe(res => {
      this.invoice = res
      this.title = 'Attachement Facture N°: ' + this.invoiceService.formatInvoiceNumber(res) + " de  " + this.invoice.customer.shortName
      this.customer = this.invoice.customer
      this.refreshSession()
    })


    this.dropdownSettings = {
      idField: 'id',
      textField: 'name'
    }
    this.refresh()

  }

  refresh(): void {

    this.invoiceDetailService.getInvoice(this.invoice_id).subscribe(
      res => {
        this.invoiceDetails = res

      }
    )
    this.invoiceDetailService.getDistinctInscriptionByInvoice(this.invoice_id).subscribe(
      res => {
        this.inscriptions = res
      })

    this.invoiceDetailService.getDistinctSessionByInvoice(this.invoice_id).subscribe(
      res => {
        this.distinctSessions = res

      })
  }


  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer cette ligne ?")) {

      this.invoiceDetailService.delete(a.id).subscribe(() => {
        this.refresh()
        this.invoiceDetailService.updateIsBilled(a).subscribe(res => {
          this.refreshSession()
        })
      })
    }
  }

  onUpdate(a: any) {
    this.router.navigateByUrl("update-invoice-detail/" + a.id)
  }


  onSearch() {
    this.refresh()
  }
  traitement(session: any) {


    this.inscriptionService.getAllByCustomerBySession(this.customer.id, session.session.id).subscribe(
      (res: any[]) => {

        session.fg.value.phFgName.forEach((p: any) => {

          res.forEach(ins => {
            this.invoiceDetailService.add(
              {
                inscription: ins,
                invoice: this.invoice,
                phase: p
              }).subscribe(res => {
                this.refresh()
                this.refreshSession()
              }
            )

          })

        })


      })


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
    // this.sessionService.getAllParam({
    //   name: this.fg1.value.name,
    //   theme: this.fg1.value.theme,
    //   date: this.fg1.value.dd
    // }).subscribe(res => {
    //   this.sessions = res
    // })
  }

  onRetour() {
    this.router.navigateByUrl("invoice-detail/" + this.invoice_id)
  }


  refreshSession() {
    this.inscriptionService.getSessionByCustomer(this.customer.id).subscribe(ls => {
        this.sessions = []
        ls.forEach((e: any) => {
            this.phaseService.getAllBySessionForBilling(e.id).subscribe(
              res => {
                let phs: any = []
                for (let p of res) {
                  phs.push({
                    id: p.id,
                    name: p.name + " " + this.datePipe.transform(p.startDate, 'dd/MM/YY') + " Au " + this.datePipe.transform(p.endDate, 'dd/MM/YY') + " ( " + p.duration + "J.)",
                  })
                }
                this.sessions.push({
                  session: e,
                  phases: phs,
                  fg: this.fb.group({
                    phFgName: []
                  })
                })
              })
          }
        )
      }
    )
  }


  deleteAll(a: any) {
    if (confirm("Voulez vous vraiment supprimer toutes lignes ?")) {
      this.invoiceDetailService.deleteAll(a.id, this.invoice.id).subscribe(() => {
        this.refresh()
        this.refreshSession();

      })
    }


  }

  onAdd(a:any) {
    this.router.navigateByUrl("add-invoice-detail/" + a.id+"/"+this.invoice.id)
  }

  onPrint() {
    this.router.navigateByUrl("print-attachement/"+this.invoice.id)
  }
}




