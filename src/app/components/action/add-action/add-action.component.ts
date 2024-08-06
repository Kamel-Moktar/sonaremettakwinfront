import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ActionService} from "../../../services/action/action.service";
import {DomaineService} from "../../../services/domaine/domaine.service";

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css']
})
export class AddActionComponent {

  title: String = "Nouvelle action de formation ";


  formGroup: FormGroup = this.fb.group({
    name: ["", Validators.required],
    but: [""],
    objectif: [""],
    dureDay: ["", Validators.required],
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
    private actionService: ActionService,
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
      this.actionService.add({
        name: this.formGroup.value.name,
        but: this.formGroup.value.but,
        objectif: this.formGroup.value.objectif,
        duration: this.formGroup.value.dureDay,
        durationHour: this.formGroup.value.dureHour,
        domaine: this.selectedDomaine

      }).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez remplir les rebiques requis")


  }

  onCancel() {
    this.router.navigateByUrl("action")
  }


  dureEntered() {

    this.formGroup = this.fb.group({
      name: [this.formGroup.value.name, Validators.required],
      but: [this.formGroup.value.but],
      objectif: [this.formGroup.value.objectif],
      dureDay: [this.formGroup.value.dureDay, Validators.required],
      dureHour: [this.formGroup.value.dureDay * 6, Validators.required],
      dom: [this.formGroup.value.dom, Validators.required],

    })
  }
}

