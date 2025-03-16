import {Component} from '@angular/core';

import {Router} from "@angular/router";
import {InvoiceService} from "../../services/invoice/invoice.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  invoices?: any[];
  title: any = 'Facture';
  formGroup: any = this.fb.group({
    number: [""],
    shortName: [""],
    date: [""]
  });
  constructor(
    public invoiceService: InvoiceService,
    private router: Router,
    private modalService: NgbModal,
    private fb:FormBuilder
  ) {
  }

  ngOnInit(): void {


    this.refresh()
  }

  refresh(): void {
    this.invoiceService.getAllParam({number: this.formGroup.value.number, shortName: this.formGroup.value.shortName, date: this.formGroup.value.date}).subscribe(
      (res:any) => {
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


  onSearch() {
    this.refresh()
  }
}
