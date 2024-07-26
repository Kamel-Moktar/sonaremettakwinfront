import {Component} from '@angular/core';

import {Router} from "@angular/router";
import {InvoiceService} from "../../services/invoice/invoice.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  invoices?: any[];
  title: any = 'Facture';

  constructor(public invoiceService: InvoiceService, private router: Router,private modalService: NgbModal) {
  }

  ngOnInit(): void {


    this.refresh()
  }

  refresh(): void {
    this.invoiceService.getAll().subscribe(
      res => {
        this.invoices = res
      })
  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {

      this.invoiceService.delete(a).subscribe(() => {
        this.refresh()
      })
    }
  }


  onUpdate(a: any) {
    this.router.navigateByUrl("updateinvoice/" + a.id)
  }

  onAddInvoice() {
    this.router.navigateByUrl("addinvoice")
  }

  onDetail(a: any) {
    this.router.navigateByUrl("invoice-detail/" + a.id)
  }



}
