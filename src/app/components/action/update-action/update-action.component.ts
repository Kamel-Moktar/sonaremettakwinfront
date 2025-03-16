import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ActionService} from "../../../services/action/action.service";
import {DomaineService} from "../../../services/domaine/domaine.service";

@Component({
  selector: 'app-update-action',
  templateUrl: './update-action.component.html',
  styleUrls: ['./update-action.component.css']
})
export class UpdateActionComponent {

  title: String = "MAJ Action de formation ";


  formGroup: FormGroup = this.fb.group({
    name: ["", Validators.required],
    but: [""],
    objectif: [""],
    dureDay: ["", Validators.required],
    dureHour: ["", Validators.required],
    domaine: ["", Validators.required],
    typ: ["", Validators.required],
  })
  footer: any = "";
  domaines: any[] = [];
  selectedDomaine: any
  selected: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public actionService: ActionService,
    private domaineService: DomaineService,
    private activateRoute: ActivatedRoute
  ) {


  }

  ngOnInit() {
    const id = this.activateRoute.snapshot.url[1].path
    this.actionService.getById(id).subscribe((res: any) => {
      this.selected = res;
      this.domaineService.getAll().subscribe((res: any) => {//est une prog asynchrone pour éviter le blocage
        this.domaines = res
      })

      this.formGroup = this.fb.group({
        name: [res.name, Validators.required],
        but: [res.but],
        objectif: [res.objectif],
        dureDay: [res.duration, Validators.required],
        dureHour: [res.durationHour, Validators.required],
        domaine: [res.domaine.name, Validators.required],
        typ: [res.type, Validators.required],
      })


    })
  }

  onValidate() {
    const v = this.formGroup.value.domaine;
    this.domaines.forEach(u => {
      if (u.name == v) this.selectedDomaine = u
    })
    if (this.formGroup.valid) {
      this.actionService.update({
        id: this.selected.id,
        name: this.formGroup.value.name,
        but: this.formGroup.value.but,
        objectif: this.formGroup.value.objectif,
        duration: this.formGroup.value.dureDay,
        durationHour: this.formGroup.value.dureHour,
        domaine: this.selectedDomaine,
        type:this.formGroup.value.typ
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
      domaine: [this.formGroup.value.domaine, Validators.required],
      type: [this.formGroup.value.typ, Validators.required]
    })
  }
}

