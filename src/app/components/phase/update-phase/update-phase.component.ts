import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionService} from "../../../services/session/session.service";
import {PhaseService} from "../../../services/phase/phase.service";
import {UtilsService} from "../../../services/utils/utils.service";

@Component({
  selector: 'app-update-phase',
  templateUrl: './update-phase.component.html',
  styleUrls: ['./update-phase.component.css']
})
export class UpdatePhaseComponent {


  title: String = "Modifier  Phase d'une session de formation ";
  typePhases: any[] = []
  lieuPhases: any[] = []
  formGroup: FormGroup = this.fb.group({
    name: ["", Validators.required],
    dd: ["", Validators.required],
    df: ["", Validators.required],
    type: [Validators.required],
    lieu: []
  })

  fg: FormGroup = this.fb.group({
    name: [""],
    domaine: [""]
  })
  footer: any = "";
  session: any;
  selected: any

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sessionService: SessionService,
    private phaseService: PhaseService,
    private activateRoute: ActivatedRoute,
    private utils: UtilsService
  ) {


  }

  ngOnInit() {


    let phase_id = this.activateRoute.snapshot.url[1].path
    if (phase_id != "0") {
      this.phaseService.getById(phase_id).subscribe(ph => {
        this.selected = ph
        this.session = ph.session


        this.formGroup = this.fb.group({
          name: [ph.name, Validators.required],
          dd: [this.utils.formatDate(ph.startDate), Validators.required],
          df: [this.utils.formatDate(ph.endDate), Validators.required],
          type: [ph.typePhase, Validators.required],
          lieu: [ph.lieuPhase]
        })


      })
    }

    this.phaseService.grtTypePhase().subscribe(res => {
      this.typePhases = res


    })
    this.phaseService.grtLieuPhase().subscribe(res => {
      this.lieuPhases = res


    })

  }

  onValidate() {
    if (this.formGroup.valid && this.session) {
      if (this.formGroup.value.df >= this.formGroup.value.dd) {
        if (this.formGroup.value.df <= this.utils.formatDate(this.session.endDate) && this.formGroup.value.dd >= this.utils.formatDate(this.session.startDate)) {
          this.phaseService.add({
            id: this.selected.id,
            name: this.formGroup.value.name,
            startDate: this.formGroup.value.dd,
            endDate: this.formGroup.value.df,
            session: this.session,
            typePhase: this.formGroup.value.type,
            lieuPhase: this.formGroup.value.type == 'FT' ? this.formGroup.value.lieu : null,

          }).subscribe(() => {
            this.onCancel();
          })
        } else alert("Les dates de la phase sont  en dehors de l'action de formation  ")
      } else alert("La date début est supérieure à la date fin ")
    } else alert("Veuillez remplir les rebiques requis")


  }

  onCancel() {
    this.router.navigateByUrl("phase/" + this.session.id)
  }


}
