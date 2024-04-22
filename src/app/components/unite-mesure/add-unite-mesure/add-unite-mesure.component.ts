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
      name:["",Validators.required]
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
    this.uniteMesurService.add({
      name: this.formGroup.value.name,

    }).subscribe( ()=>{
        this.onCancel();
      }

    )



  }

}
