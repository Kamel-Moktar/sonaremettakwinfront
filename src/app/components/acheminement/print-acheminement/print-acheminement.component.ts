import { Component } from '@angular/core';
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {ActivatedRoute} from "@angular/router";
import {SaleService} from "../../../services/sale/sale.service";
import {AcheminementService} from "../../../services/acheminement/acheminement.service";

@Component({
  selector: 'app-print-acheminement',
  templateUrl: './print-acheminement.component.html',
  styleUrls: ['./print-acheminement.component.css']
})
export class PrintAcheminementComponent {

  shippingSlip: any;
  lignes: any;
  shippingSlipId: any
  title= "Impression du bordereau d'envoi ";


  constructor(public shippingSlipService: AcheminementService,
              private activateRoute: ActivatedRoute,
              public invoiceSservice :InvoiceService
  ) {

  }

  ngOnInit() {
    this.shippingSlipId = this.activateRoute.snapshot.url[1].path
    this.shippingSlipService.getShippingSlipById(this.shippingSlipId).subscribe(
      (invoiceRes) => {
        this.shippingSlip = invoiceRes
        this.shippingSlipService.getInvoiceByShippingSlip(this.shippingSlip.id).subscribe(
          (res) => {
            this.lignes = res

          })
      })

  }

  onPrint() {
    let printDocument: any = document.getElementById("printPart")
    if (printDocument != null) {
      document.body.innerHTML = printDocument.innerHTML;
      window.print()
      window.close()
    }
  }



}
