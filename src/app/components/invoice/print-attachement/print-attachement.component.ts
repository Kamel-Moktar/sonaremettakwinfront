import {Component} from '@angular/core';
import {SessionService} from "../../../services/session/session.service";
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {InvoiceDetailService} from "../../../services/invoice-detail/invoice-detail.service";

@Component({
  selector: 'app-print-attachement',
  templateUrl: './print-attachement.component.html',
  styleUrls: ['./print-attachement.component.css']
})
export class PrintAttachementComponent {

  session: any;
  lignes: any;
  invoice: any
  invoiceDetails: any[] = []
  distinctSessions: any[] = []
  inscriptions: any[]=[]
  title = "Attachement Fature   ";
  titre: any="";


  constructor(public sessionService: SessionService,
              private activateRoute: ActivatedRoute,
              private invoiceService: InvoiceService,
              private invoiceDetailService: InvoiceDetailService,
              private router: Router

  ) {

  }

  ngOnInit() {
    let id = this.activateRoute.snapshot.url[1].path

    this.invoiceService.getInvoiceById(id).subscribe(
      (invoice) => {
        this.invoice = invoice
        this.titre="Attachement de la fature N°:"+this.invoiceService.formatInvoiceNumber(invoice)+" du "
        this.refresh()
      })

  }

  refresh(): void {

    this.invoiceDetailService.getInvoice(this.invoice.id).subscribe(
      (res:any)=> {
        this.invoiceDetails = res

      }
    )
    this.invoiceDetailService.getDistinctInscriptionByInvoice(this.invoice.id).subscribe(
      (res:any) => {
        this.inscriptions = res
      })

    this.invoiceDetailService.getDistinctSessionByInvoice(this.invoice.id).subscribe(
      (res:any) => {
        this.distinctSessions = res

      })
  }

  onPrint() {
    let printDocument: any = document.getElementById("printPart")
    let ancInner = document.body.innerHTML;
    if (printDocument != null) {
      document.body.innerHTML = printDocument.innerHTML;
      window.print()
      document.body.innerHTML = ancInner
      this.router.navigateByUrl("invoice")

    }
  }


  onCancel() {
    this.router.navigateByUrl("attachement/" + this.invoice.id)
  }
}


