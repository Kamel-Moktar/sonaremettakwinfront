import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {CustomerService} from "../../../services/customer/customer.service";
import {BenefitService} from "../../../services/benefit/benefit.service";
import {SaleService} from "../../../services/sale/sale.service";
import {UniteMesureService} from "../../../services/unite-mesure/unite-mesure.service";

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent {

  title:String="Ajouter une prestation à la facture";


  formGroup: FormGroup = this.fb.group({
    number: [1, Validators.required],
    qte: ["", Validators.required],
    price: ["", Validators.required],
    obs: ["", Validators.required]



  })

  footer: any="";
  benefits: any[]=[];
  selectedBenefit :any
  selected: any;
  invoice :any
  invoiceId: any;
  units : any[]=[];
  unit:any

  constructor(
    private activateRoute:ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private invoiceService: InvoiceService,
    private saleService :SaleService,
    private benefitService :BenefitService,
    private  uniteMesureService :UniteMesureService

  ) {
  }


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

    this.uniteMesureService.getUnits().subscribe(
      (res)=>{
        if(this.units.length>0)
          this.unit=this.units[0]
        this.units=res
      })
  }

  onValidate() {

    if(this.selectedBenefit!=null){
      this.saleService.add({
        benefit: this.selectedBenefit,
        invoice: this.invoice,
        number:this.formGroup.value.number,
        unit:this.unit,
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
    let value = event.target.value;
    console.log(value)
    this.benefits.forEach(u=>{

      if(u.designation===value) {
        this.selectedBenefit=u;

      }
    })
    // console.log(this.selectedCustomer)
  }

  unitSelected(event:any) {
    let value = event.target.value;
    console.log(value)
    this.units.forEach(u=>{

      if(u.name===value) {
        this.unit=u;

      }
    })
  }
}

