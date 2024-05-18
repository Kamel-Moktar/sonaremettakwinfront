import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AcheminementService} from "../../../services/acheminement/acheminement.service";
import {CustomerService} from "../../../services/customer/customer.service";

@Component({
  selector: 'app-accuse-acheminement',
  templateUrl: './accuse-acheminement.component.html',
  styleUrls: ['./accuse-acheminement.component.css']
})

export class AccuseAcheminementComponent {

  title: String = "Accuser un bordereau d'envoi";
  selectedShippingSlip:any
  selected: any;
  private selectedShippingSlipId: any;
  formGroup: FormGroup = this.fb.group({
      date: ["", Validators.required],
  })


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private shippingSlipService: AcheminementService,
     private activateRoute:ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.selectedShippingSlipId = this.activateRoute.snapshot.url[1].path
    this.shippingSlipService.getShippingSlipById(this.selectedShippingSlipId).subscribe(res=>{
      this.selectedShippingSlip=res
    })

  }

  onValidate() {
    if (this.formGroup.valid&&this.selectedShippingSlip!=null) {
      if(!(this.selectedShippingSlip.date-1 > this.formGroup.value.date)){
      this.shippingSlipService.accuse({
        id:this.selectedShippingSlipId,
        accuse: this.formGroup.value.date
      }).subscribe(() => {
          this.onCancel();
        }
      )
      }else alert("Il est possible d'accuser un BE avant sa création  !")
    } else alert("Veuillez Saisir une date correcte  ")


  }

  onCancel() {
    this.router.navigateByUrl("acheminement")
  }


}
