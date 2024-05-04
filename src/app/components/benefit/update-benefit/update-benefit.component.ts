import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BenefitService} from "../../../services/benefit/benefit.service";
import {UniteMesureService} from "../../../services/unite-mesure/unite-mesure.service";

@Component({
  selector: 'app-update-benefit',
  templateUrl: './update-benefit.component.html',
  styleUrls: ['./update-benefit.component.css']
})
export class UpdateBenefitComponent {
  title: String = "Modifier Prestation";


  formGroup: FormGroup = this.fb.group({

    designation: ["", Validators.required],
    description: ["", Validators.required],
    price: [0, Validators.required],

  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private benefitService: BenefitService,
    private uniteMesureService: UniteMesureService,
    private activateRoute: ActivatedRoute
  ) {
  }

  footer: any = "";
  uniteMesures: any[] = [];
  selectedUniteMesure: any
  selected: any;

  ngOnInit() {
    this.uniteMesureService.getAll('*').subscribe(res => {//est une prog asynchrone pour éviter le blocage
      this.uniteMesures = res
      this.uniteMesures.forEach(u => {
        if (u.name == this.activateRoute.snapshot.url[6].path) this.selectedUniteMesure = u
      })

    })

    const id =this.activateRoute.snapshot.url[1].path
    this.benefitService.getById(id).subscribe(res=>{

      this.formGroup = this.fb.group({
        id: [res.id, Validators.required],
        designation: [res.designation, Validators.required],
        description: [res.description, Validators.required],
        price: [res.price, Validators.required]

      })
    })


  }

  onValidate() {
    if(this.formGroup.valid&&this.selectedUniteMesure){
    this.benefitService.update({
      id: this.formGroup.value.id,
      designation: this.formGroup.value.designation,
      description: this.formGroup.value.description,
      price: this.formGroup.value.price,
      sakina: this.formGroup.value.sakina,
      unitMeasurement: this.selectedUniteMesure
    }).subscribe(() => {
        this.onCancel();
      }
    )
    }else {alert("Veuillez Saisir tous les champs")}
  }

  onCancel() {
    this.router.navigateByUrl("benefit")
  }

  uniteMesurSelected(event: any) {
    const value = event.target.value;
    this.uniteMesures.forEach(u => {
      if (u.name == value) this.selectedUniteMesure = u
    })
  }

}
