import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UniteMesureService} from "../../../services/unite-mesure/unite-mesure.service";
import {FormBuilder, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-unite-mesure',
  templateUrl: './add-unite-mesure.component.html',
  styleUrls: ['./add-unite-mesure.component.css']
})
export class AddUniteMesureComponent {
  title: any="Ajouter unite de mesure";
  formGroup: any=this.fb.group(
    {
      name:["",Validators.required],
      symbol:["",Validators.required],
      designation:[""]
    }
  );
  footer: any;

constructor(private  router:Router,
            private uniteMesurService :UniteMesureService,
            private fb : FormBuilder) {
}
  onCancel() {
    this.router.navigateByUrl("unitemesure")
  }

  onValidate() {
  if(this.formGroup.valid){
    this.uniteMesurService.add({
      name: this.formGroup.value.name,
      symbol: this.formGroup.value.symbol,
      designation: this.formGroup.value.designation

    }).subscribe( ()=>{
        this.onCancel();
      }
    )
  }else alert("Veuillez remplir les rebiques requis")
  }

}
