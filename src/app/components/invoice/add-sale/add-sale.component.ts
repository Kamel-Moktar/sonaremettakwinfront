import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {CustomerService} from "../../../services/customer/customer.service";
import {BenefitService} from "../../../services/benefit/benefit.service";
import {SaleService} from "../../../services/sale/sale.service";

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent {

  title:String="Ajouter une prestation à la facture";


  formGroup: FormGroup = this.fb.group({
    qte: ["", Validators.required],
    price: ["", Validators.required],
    obs: ["", Validators.required]



  })


  constructor(
    private activateRoute:ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private invoiceService: InvoiceService,
    private saleService :SaleService,
    private benefitService :BenefitService,

  ) {
  }

  footer: any="";
  benefits: any[]=[];
  selectedBenefit :any
  selected: any;
  invoice :any
invoiceId: any;
  ngOnInit(){

    this.invoiceId=this.activateRoute.snapshot.url[1].path
    this.benefitService.getAll().subscribe(res=>{
      this.benefits=res
      if(this.benefits.length>0)
        this.selectedBenefit=this.benefits[0]
    })

    this.invoiceService.getInvoiceById(this.invoiceId).subscribe(
      (res)=>{
        this.invoice=res
      })
  }

  onValidate() {

    if(this.selectedBenefit!=null){
      this.saleService.add({
        benefit: this.selectedBenefit,
        invoice: this.invoice,
        quantity: this.formGroup.value.qte,
        price: this.formGroup.value.price,
        observation:this.formGroup.value.obs
      }).subscribe( ()=>{
          this.onCancel();
        }
      )
    }else alert("Veuillez sélectionner une prestation ")


  }

  onCancel() {
    this.router.navigateByUrl("invoice-detail/"+this.invoice.id)
  }

  customerSelected(event:any) {



    const value = event.target.value;


    this.benefits.forEach(u=>{
      if(u.shortName==value) {this.selectedBenefit=u;
        console.log(this.selectedBenefit)
      }
    })

    // console.log(this.selectedCustomer)

  }
}

