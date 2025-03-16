import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../../services/customer/customer.service";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {
  title:String="Modifier Client ";


  formGroup: FormGroup = this.fb.group({
    name: ["", Validators.required],
    shortName: ["", Validators.required],
    adresse: ["", Validators.required],
    phoneNumber: [""],
    fax: [""],
    rc: [""],
    if: [""],
    ns: [""],
    nArticle: [""],
    exempt:[false],
    sameCompany:[false]
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

    const id=this.activateRoute.snapshot.url[1]

    this.customerService.getById(id).subscribe((res:any)=>{
      this.formGroup= this.fb.group({
        id: [res.id, Validators.required],
        name: [res.name, Validators.required],
        shortName: [res.shortName, Validators.required],
        adresse: [res.adresse, Validators.required],
        phoneNumber: [res.phoneNumber],
        fax: [res.fax],
        rc: [res.numRc],
        if: [res.idFiscal],
        ns: [res.idStatistic],
        nArticle: [res.numArticle],
        exempt:[res.exemptFromTax],
        sameCompany:[res.sameCompany]
      })

    })



  }


  onValidate() {
    this.customerService.add({
      id:this.formGroup.value.id,
      name: this.formGroup.value.name,
      shortName: this.formGroup.value.shortName,
      adresse: this.formGroup.value.adresse,
      phoneNumber: this.formGroup.value.phoneNumber,
      fax: this.formGroup.value.fax,
      numRc: this.formGroup.value.rc,
      idFiscal: this.formGroup.value.if,
      idStatistic: this.formGroup.value.ns,
      numArticle: this.formGroup.value.nArticle,
      exemptFromTax:this.formGroup.value.exempt,
      sameCompany:this.formGroup.value.sameCompany,
    }).subscribe( ()=>{
        this.onCancel();
      }

    )



  }

  onCancel() {
    this.router.navigateByUrl("customer")
  }
}

