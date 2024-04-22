import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {CustomerService} from "../../../services/customer/customer.service";

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent {
  title:String="Nouvelle facture";


  formGroup: FormGroup = this.fb.group({
    number: ["", Validators.required],
    date: ["", Validators.required],
    object: ["", Validators.required],
    reference: ["", Validators.required],


  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private invoiceService: InvoiceService,
    private customerService :CustomerService
  ) {
  }

  footer: any="";
  customers: any[]=[];
  selectedCustomer :any
  selected: any;

  ngOnInit(){
    this.customerService.getAll().subscribe(res=>{
     this.customers=res
      if(this.customers.length>0)
      this.selectedCustomer=this.customers[0]
    })
  }

  onValidate() {

    if(this.selectedCustomer!=null){
    this.invoiceService.add({
      number: this.formGroup.value.number,
      date: this.formGroup.value.date,
      object: this.formGroup.value.object,
      reference: this.formGroup.value.reference,
      customer:this.selectedCustomer


    }).subscribe( ()=>{
        this.onCancel();
      }

    )
  }else alert("Veuillez selectionner un client ")


  }

  onCancel() {
    this.router.navigateByUrl("invoice")
  }

  customerSelected(event:any) {



    const value = event.target.value;


    this.customers.forEach(u=>{
      if(u.shortName==value) {this.selectedCustomer=u;
      console.log(this.selectedCustomer)
      }
    })

   // console.log(this.selectedCustomer)

  }
}
