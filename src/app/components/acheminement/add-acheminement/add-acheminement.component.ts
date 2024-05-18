import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {CustomerService} from "../../../services/customer/customer.service";
import {AcheminementService} from "../../../services/acheminement/acheminement.service";

@Component({
  selector: 'app-add-acheminement',
  templateUrl: './add-acheminement.component.html',
  styleUrls: ['./add-acheminement.component.css']
})
export class AddAcheminementComponent {

  title:String="Nouveau bordereau d'envoi";


  formGroup: FormGroup = this.fb.group({
    number: ["", Validators.required],
    date: ["", Validators.required],
    object: ["", Validators.required],
    reference: ["", Validators.required],


  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private shippingSlipService: AcheminementService,
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
      this.shippingSlipService.add({
        number: this.formGroup.value.number,
        date: this.formGroup.value.date,
        customer:this.selectedCustomer
      }).subscribe( ()=>{
          this.onCancel();
        }

      )
    }else alert("Veuillez selectionner un client ")


  }

  onCancel() {
    this.router.navigateByUrl("acheminement")
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

