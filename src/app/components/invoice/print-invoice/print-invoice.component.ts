import {Component} from '@angular/core';
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SaleService} from "../../../services/sale/sale.service";

@Component({
  selector: 'app-print-invoice',
  templateUrl: './print-invoice.component.html',
  styleUrls: ['./print-invoice.component.css']
})
export class PrintInvoiceComponent {

  invoice: any;
  lignes: any;
  invoiceId: any
  title= "Impression de la facture ";


  constructor(public invoiceService: InvoiceService,
              private activateRoute: ActivatedRoute,
              private saleService: SaleService,
              private router :Router

  ) {

  }

  ngOnInit() {
    this.invoiceId = this.activateRoute.snapshot.url[1].path

    this.invoiceService.getInvoiceById(this.invoiceId).subscribe(
      (invoiceRes) => {
        this.invoice = invoiceRes
        this.saleService.getSaleByInvoice(this.invoice).subscribe(
          (res) => {
            this.lignes = res

          })
      })
  }

  onPrint() {
    let printDocument: any = document.getElementById("printPart")
    let ancInner=document.body.innerHTML;
    if (printDocument != null) {
      document.body.innerHTML = printDocument.innerHTML;
      window.print()
      document.body.innerHTML=ancInner
      this.router.navigateByUrl("invoice")
     // window.location.reload()
    }
  }
  intPart() {
    let i = Math.trunc(this.invoice.amountIncludingTax)
    return Math.floor(this.invoice.amountIncludingTax)
  }
  decimalPart() {
    return (this.invoice.amountIncludingTax - Math.trunc(this.invoice.amountIncludingTax)) * 100
  }
  onCancel() {
    this.router.navigateByUrl("invoice-detail/"+this.invoiceId)
  }
}
