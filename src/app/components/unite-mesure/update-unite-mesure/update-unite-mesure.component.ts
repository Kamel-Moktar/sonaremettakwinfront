import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UniteMesureService} from "../../../services/unite-mesure/unite-mesure.service";

@Component({
  selector: 'app-update-unite-mesure',
  templateUrl: './update-unite-mesure.component.html',
  styleUrls: ['./update-unite-mesure.component.css']
})
export class UpdateUniteMesureComponent {
  title:String="Modifier Client ";


  formGroup: FormGroup = this.fb.group({
    id:["", Validators.required],
    name: ["", Validators.required],


  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private uniteMesureService: UniteMesureService,
    private activateRoute:ActivatedRoute
  ) {
  }

  footer: any="";



  ngOnInit(){
    this.formGroup= this.fb.group({
      id:[this.activateRoute.snapshot.url[1].path, Validators.required],
      name: [this.activateRoute.snapshot.url[2].path, Validators.required],

    })

  }


  onValidate() {
    this.uniteMesureService.add({
      id:this.formGroup.value.id,
      name: this.formGroup.value.name

    }).subscribe( ()=>{
        this.onCancel();
      }

    )



  }

  onCancel() {
    this.router.navigateByUrl("unitemesure")
  }
}

