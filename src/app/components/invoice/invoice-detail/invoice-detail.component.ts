import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {SaleService} from "../../../services/sale/sale.service";
import {BenefitService} from "../../../services/benefit/benefit.service";

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent {
  printMode: any=false
  title: any="Detail de la facture ";
  lignes: any[]=[];
  invoiceId: any=0;
  benefits :any[]=[]
  invoice :any
  constructor(private router:Router,
              private activateRoute:ActivatedRoute,
              public invoiceService :InvoiceService,
              private saleService:SaleService,
              private benefitService :BenefitService) {

  }
  ngOnInit(){
    this.invoiceId=this.activateRoute.snapshot.url[1].path





    this.benefitService.getAll().subscribe(
      (res)=>{
        this.benefits=res
      })

    this.invoiceService.getInvoiceById(this.invoiceId).subscribe(
      (res)=>{
        this.invoice=res
        this.saleService.getSaleByInvoice(this.invoice).subscribe(
          (res)=>{
            this.lignes=res
          })


      })

  }
  // convertir-nombre-lettre
  onPrint(sectionToPrint: string) {

    let document1: any = document.getElementById(sectionToPrint)
    const originalContents = document.body.innerHTML;

    if (document1 != null) {
      document.body.innerHTML = document1.innerHTML;
      window.print();
      document.body.innerHTML = originalContents;
    }
   this.printMode=false
   this.router.navigateByUrl("invoice")
  }

  onAddLigne() {

  }

  onUpdate(a:any) {
    this.router.navigateByUrl("update-sale/"+a.id)
  }



  onCancel() {
    this.router.navigateByUrl("invoice")
  }

  onAdd() {
    this.router.navigateByUrl("add-sale/"+this.invoice.id)
  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer cet ligne  ?")) {

      this.saleService.delete(a).subscribe(() => {
        this.invoiceService.getInvoiceById(this.invoiceId).subscribe(
          (res)=>{
            this.invoice=res
            this.saleService.getSaleByInvoice(this.invoice).subscribe(
              (res)=>{
                this.lignes=res
              })


          })
      })
    }
  }

  onPrint1() {
    this.printMode=true
  }
}

