import {Component} from '@angular/core';
import {InvoiceService} from "../../services/invoice/invoice.service";
import * as XLSX from 'xlsx';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-turnover',
  templateUrl: './turnover.component.html',
  styleUrls: ['./turnover.component.css']
})
export class TurnoverComponent {
  invoices: any[]=[];
  formGroup: any = this.fb.group({
    number: [""],
    shortName: [""],
    date: [""]
  });

  totalHT=0
  totalTTC=0
  nbInvoice=0
  title: any = "Chiffre d'affaire";

  constructor(public invoiceService: InvoiceService,
              private fb:FormBuilder
  ) {
  }


  ngOnInit() {

    this.refreshInvoices({number: "", shortName: "", date: ""})
  }


  onSearch() {
    this.refreshInvoices({number: this.formGroup.value.number, shortName: this.formGroup.value.shortName, date:this.formGroup.value.date})
  }

  refreshInvoices(searchParam: any) {
    this.totalHT=0
    this.totalTTC=0
    this.nbInvoice=0
    this.invoiceService.getAllParam(searchParam).subscribe((ls) => {
      this.invoices = ls
      this.invoices.forEach(i=>{
        this.totalHT=i.amountExcludingTax+this.totalHT
        this.totalTTC=i.amountIncludingTax+this.totalTTC
        this.nbInvoice=this.nbInvoice+1
      })
    })
  }

  onExport() {
    let element = document.getElementById('invoiceTable');
    const ws = XLSX.utils.table_to_sheet(element);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "ca");
    const filename = "chiffre d affaire.xlsx";
    XLSX.writeFile(wb, filename);
  }
}
