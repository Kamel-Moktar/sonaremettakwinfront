import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../../../services/customer/customer.service";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {
  title:String="Modifier Client ";


  formGroup: FormGroup = this.fb.group({
    id:["", Validators.required],
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
    private customerService: CustomerService,
    private activateRoute:ActivatedRoute
  ) {
  }

  footer: any="";



  ngOnInit(){
    this.formGroup= this.fb.group({
      id:[this.activateRoute.snapshot.url[1].path, Validators.required],
      name: [this.activateRoute.snapshot.url[2].path, Validators.required],
      shortName: [this.activateRoute.snapshot.url[3].path, Validators.required],
      rc: [this.activateRoute.snapshot.url[4].path, Validators.required],
      if: [this.activateRoute.snapshot.url[5].path, Validators.required],
      ns: [this.activateRoute.snapshot.url[6].path, Validators.required],
      nArticle: [this.activateRoute.snapshot.url[7].path, Validators.required]

    })

  }


  onValidate() {
    this.customerService.add({
      id:this.formGroup.value.id,
      name: this.formGroup.value.name,
      shortName: this.formGroup.value.shortName,
      rc: this.formGroup.value.rc,
      if: this.formGroup.value.if,
      ns: this.formGroup.value.ns,
      narticle:this.formGroup.value.nArticle
    }).subscribe( ()=>{
        this.onCancel();
      }

    )



  }

  onCancel() {
    this.router.navigateByUrl("customer")
  }
}

