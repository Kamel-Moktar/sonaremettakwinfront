import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UniteMesureService} from "../../../services/unite-mesure/unite-mesure.service";

@Component({
  selector: 'app-update-unite-mesure',
  templateUrl: './update-unite-mesure.component.html',
  styleUrls: ['./update-unite-mesure.component.css']
})
export class UpdateUniteMesureComponent {
  title: String = "Modifier Client ";


  formGroup: FormGroup = this.fb.group({
    id: ["", Validators.required],
    name: ["", Validators.required],
    symbol: ["", Validators.required],
    designation: [""]

  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private uniteMesureService: UniteMesureService,
    private activateRoute: ActivatedRoute
  ) {
  }

  footer: any = "";


  ngOnInit() {

   const id= this.activateRoute.snapshot.url[1].path
    this.uniteMesureService.getUniteMesureById(id).subscribe(
      (res:any)=>{
    this.formGroup = this.fb.group({
      id: [res.id, Validators.required],
      name: [res.name, Validators.required],
      symbol: [res.symbol, Validators.required],
      designation: [res.designation],

    })
  })
  }


  onValidate() {
    if(this.formGroup.valid){
    this.uniteMesureService.update({
      id: this.formGroup.value.id,
      name: this.formGroup.value.name,
      symbol: this.formGroup.value.symbol,
      designation: this.formGroup.value.designation

    }).subscribe(() => {
        this.onCancel();
      }
    )

    }else alert("Veuillez remplir les rebiques requis")
  }

  onCancel() {
    this.router.navigateByUrl("unitemesure")
  }
}

