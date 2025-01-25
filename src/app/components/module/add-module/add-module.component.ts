import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {DomaineService} from "../../../services/domaine/domaine.service";
import {ModuleService} from "../../../services/module/module.service";

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent {


  title: String = "Nouvelle module de formation ";


  formGroup: FormGroup = this.fb.group({
    name: ["", Validators.required],
    but: [""],
    objectif: [""],
    dureHour: ["", Validators.required],
    dom: ["aa", Validators.required]

  })
  footer: any = "";
  domaines: any[] = [];
  selectedDomaine: any
  selected: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private moduleService: ModuleService,
    private domaineService: DomaineService
  ) {


  }

  ngOnInit() {
    this.domaineService.getAll().subscribe(res => {//est une prog asynchrone pour éviter le blocage
      this.domaines = res
    })

  }

  onValidate() {
    const v = this.formGroup.value.dom;
    this.domaines.forEach(u => {
      if (u.name == v) this.selectedDomaine = u
    })

    if (this.formGroup.valid) {
      this.moduleService.add({
        name: this.formGroup.value.name,
        objectif: this.formGroup.value.objectif,
        durationHour: this.formGroup.value.dureHour,
        domaine: this.selectedDomaine

      }).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez remplir les rebiques requis")


  }

  onCancel() {
    this.router.navigateByUrl("module")
  }



}


