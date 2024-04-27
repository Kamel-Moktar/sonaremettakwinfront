import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomerService} from "../../../services/customer/customer.service";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  title:String="Nouveau  Client";


  formGroup: FormGroup = this.fb.group({
    name: ["", Validators.required],
    shortName: ["", Validators.required],
    rc: ["", Validators.required],
    if: ["", Validators.required],
    ns: ["", Validators.required],
    nArticle: ["", Validators.required]

  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private customerService: CustomerService
   ) {
  }

  footer: any="";


  onValidate() {
    this.customerService.add({
      name: this.formGroup.value.name,
      shortName: this.formGroup.value.shortName,
      numRc: this.formGroup.value.rc,
      idFiscal: this.formGroup.value.if,
      idStatistic: this.formGroup.value.ns,
      numArticle:this.formGroup.value.nArticle
    }).subscribe( ()=>{
      this.onCancel();
      }

    )



  }

  onCancel() {
  this.router.navigateByUrl("customer")
  }
}
