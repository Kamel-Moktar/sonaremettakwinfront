import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {SaleService} from "../../../services/sale/sale.service";
import {BenefitService} from "../../../services/benefit/benefit.service";
import {AcheminementService} from "../../../services/acheminement/acheminement.service";

@Component({
  selector: 'app-update-detail-aceminement',
  templateUrl: './update-detail-aceminement.component.html',
  styleUrls: ['./update-detail-aceminement.component.css']
})
export class UpdateDetailAceminementComponent {
  title="Modifier la line d'un accusé de réception ";
  selectedShippingSlipInvoiceId:any
  selectedShippingSlipInvoice:any
  formGroup: FormGroup = this.fb.group({
    nbrPage: [""],
    obs: [""]
  })


  constructor(
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private shippingSlipService: AcheminementService
  ) {
  }
  ngOnInit() {
    this.selectedShippingSlipInvoiceId= this.activateRoute.snapshot.url[1].path

    this.shippingSlipService.getByShippingSlipInvoiceById(this.selectedShippingSlipInvoiceId).subscribe(res=>{
      this.selectedShippingSlipInvoice=res
      this.formGroup = this.fb.group({
        nbrPage: [this.selectedShippingSlipInvoice.nbrPage],
        obs: [this.selectedShippingSlipInvoice.obs]
      })
    })
  }

  onCancel() {
   this.router.navigateByUrl("detail-acheminement/"+this.selectedShippingSlipInvoice.shippingSlip.id)
  }

  onValidate() {



   this.shippingSlipService.updateShippingSlipDetail(
     {
       id:this.selectedShippingSlipInvoice.id,
       nbrPage:this.formGroup.value.nbrPage,
       obs:this.formGroup.value.obs,
     }
   ).subscribe( res=>{
     this.onCancel()}

   )
  }
}
