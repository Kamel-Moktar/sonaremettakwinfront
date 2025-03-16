import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ModuleService} from "../../../services/module/module.service";
import {DomaineService} from "../../../services/domaine/domaine.service";

@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.css']
})
export class UpdateModuleComponent {


  title: String = "Modifier les modules de formation ";


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
    private domaineService: DomaineService,
    private activateRoute: ActivatedRoute
  ) {


  }

  ngOnInit() {

    let id=this.activateRoute.snapshot.url[1].path
    this.moduleService.getById(id).subscribe(res=>{
      this.selected=res
      this.formGroup = this.fb.group({
        name: [this.selected.name, Validators.required],

        objectif: [this.selected.objectif],
        dureHour: [this.selected.durationHour, Validators.required],
        dom: [this.selected.domaine.name, Validators.required]

      })
    })

    this.domaineService.getAll().subscribe((res:any) => {//est une prog asynchrone pour éviter le blocage
      this.domaines = res
    })




  }

  onValidate() {
    const v = this.formGroup.value.dom;
    this.domaines.forEach(u => {
      if (u.name == v) this.selectedDomaine = u
    })

    if (this.formGroup.valid) {
      this.moduleService.update({
        id:this.selected.id,
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


