import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomerService} from "../../../services/customer/customer.service";
import {BenefitService} from "../../../services/benefit/benefit.service";
import {UniteMesureService} from "../../../services/unite-mesure/unite-mesure.service";

@Component({
  selector: 'app-add-benefit',
  templateUrl: './add-benefit.component.html',
  styleUrls: ['./add-benefit.component.css']
})
export class AddBenefitComponent {
  title:String="Nouvelle Prestation";


  formGroup: FormGroup = this.fb.group({
   designation: ["", Validators.required],
    description: ["", Validators.required],
    price: ["", Validators.required],
    sakina: ["", Validators.required],

  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private benefitService: BenefitService,
    private uniteMesureService :UniteMesureService
  ) {
  }

  footer: any="";
  uniteMesures: any[]=[];
  selectedUniteMesure :any
  selected: any;

  ngOnInit(){
    this.uniteMesureService.getAll('*').subscribe(res=>{//est une prog asynchrone pour éviter le blocage
      this.uniteMesures=res
    })
  }

  onValidate() {
    this.benefitService.add({
      designation: this.formGroup.value.designation,
      description: this.formGroup.value.description,
      price: this.formGroup.value.price,
      sakina: this.formGroup.value.sakina,
      unitMeasurement:this.selectedUniteMesure


    }).subscribe( ()=>{
        this.onCancel();
      }

    )



  }

  onCancel() {
    this.router.navigateByUrl("benefit")
  }

  uniteMesurSelected(event:any) {
    const value = event.target.value;
     this.uniteMesures.forEach(u=>{
       if(u.name==value) this.selectedUniteMesure=u
     })

    console.log(this.selectedUniteMesure)

  }
}
