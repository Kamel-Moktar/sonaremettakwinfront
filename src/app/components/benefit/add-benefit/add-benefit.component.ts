import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BenefitService} from "../../../services/benefit/benefit.service";
import {UniteMesureService} from "../../../services/unite-mesure/unite-mesure.service";

@Component({
  selector: 'app-add-benefit',
  templateUrl: './add-benefit.component.html',
  styleUrls: ['./add-benefit.component.css']
})
export class AddBenefitComponent {
  title: String = "Nouvelle Prestation";


  formGroup: FormGroup = this.fb.group({
    designation: ["", Validators.required],
    description: [""],
    price: [""],
    tva:[0.19, Validators.required]


  })
  footer: any = "";
  uniteMesures: any[] = [];
  selectedUniteMesure: any
  selected: any;
  tva: any=BenefitService.tva();


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private benefitService: BenefitService,
    private uniteMesureService: UniteMesureService
  ) {
  }


  ngOnInit() {
    this.uniteMesureService.getAll('*').subscribe((res:any) => {//est une prog asynchrone pour éviter le blocage
      this.uniteMesures = res
    })


    this.benefitService.tva1().subscribe(res=>{
      console.log(res)
    })
  }

  onValidate() {

    if (this.formGroup.valid && this.selectedUniteMesure) {
      this.benefitService.add({
        designation: this.formGroup.value.designation,
        description: this.formGroup.value.description,
        price: this.formGroup.value.price,
        tva:this.formGroup.value.tva,
        unitMeasurement: this.selectedUniteMesure

      }).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez remplir les rebiques requis")


  }

  onCancel() {
    this.router.navigateByUrl("benefit")
  }

  uniteMesurSelected(event: any) {
    const value = event.target.value;
    this.uniteMesures.forEach(u => {
      if (u.name == value) this.selectedUniteMesure = u
    })

    console.log(this.selectedUniteMesure)

  }
}
