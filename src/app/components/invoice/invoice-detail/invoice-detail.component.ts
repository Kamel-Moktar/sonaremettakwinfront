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
  printMode: any = false
  title: any = "Detail de la facture ";
  lignes: any[] = [];
  invoiceId: any = 0;
  benefits: any[] = []
  invoice: any
  amountTax9: any;
  amountTax19: any;
  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              public invoiceService: InvoiceService,
              private saleService: SaleService,
              private benefitService: BenefitService) {

  }

  ngOnInit() {
    this.invoiceId = this.activateRoute.snapshot.url[1].path

    this.saleService.getOffreByProformaByTva({invoiceId:this.invoiceId,tauxTva:0.09}).subscribe(res=>{
      console.log(res)
      this.amountTax9=res
    })

    this.saleService.getOffreByProformaByTva({invoiceId:this.invoiceId,tauxTva:0.19}).subscribe(res=>{
      this.amountTax19=res
    })
    this.benefitService.getAll().subscribe(
      (res:any) => {
        this.benefits = res
      })

    this.invoiceService.getInvoiceById(this.invoiceId).subscribe(
      (res) => {
        this.invoice = res
        this.title = 'Détail Facture N°: ' + this.invoiceService.formatInvoiceNumber(res)+" de  "+this.invoice.customer.shortName
        this.saleService.getSaleByInvoice(this.invoice).subscribe(
          (res:any) => {
            this.lignes = res
          })


      })

  }

  // convertir-nombre-lettre


  onAddLigne() {

  }

  onUpdate(a: any) {
    this.router.navigateByUrl("update-sale/" + a.id)

  }

  ouvreNouvelOnglet(url: string) {
    window.open(url, "_blank");
  }


  onCancel() {
    this.router.navigateByUrl("invoice")
  }

  onAdd() {
    this.router.navigateByUrl("add-sale/" + this.invoice.id)
  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer cet ligne  ?")) {

      this.saleService.delete(a).subscribe(() => {
        this.invoiceService.getInvoiceById(this.invoiceId).subscribe(
          (res) => {
            this.invoice = res
            this.saleService.getSaleByInvoice(this.invoice).subscribe(
              (res:any) => {
                this.lignes = res
              })


          })
      })
    }
  }

  onPrint1() {
    this.router.navigateByUrl("print-invoice/" + this.invoiceId)
  }

  onAttachement() {
    this.router.navigateByUrl("attachement/" + this.invoiceId)
  }
}

