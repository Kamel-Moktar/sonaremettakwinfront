import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {InscriptionService} from "../../../services/inscription/inscription.service";
import {UtilsService} from "../../../services/utils/utils.service";

@Component({
  selector: 'app-update-arave-date',
  templateUrl: './update-arave-date.component.html',
  styleUrls: ['./update-arave-date.component.css']
})
export class UpdateAraveDateComponent {


  title: String = "Date d'arrivée de stagiaire  ";

  inscription: any
  formGroup: FormGroup = this.fb.group({
    date: ["", Validators.required],


  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private inscriptionService: InscriptionService,
    private activateRoute: ActivatedRoute,
    private utils: UtilsService
  ) {
  }

  footer: any = "";

  ngOnInit() {
    let inscriptionId = this.activateRoute.snapshot.url[1]

    this.inscriptionService.getById(inscriptionId).subscribe(ins => {
      this.inscription = ins
      this.formGroup = this.fb.group({
        date: [ins.arriveDate ? this.utils.formatDate(ins.arriveDate) : this.utils.formatDate(ins.session.startDate)],


      })
    })


  }

  onValidate() {
    let ok = false
    if (!this.formGroup.value.date)
      if (confirm("Voulez vous vraiment annuler la présence de ce stagiaire  ?")) ok = true

    if (this.formGroup.value.date||ok) {
      this.inscriptionService.update(
        {
          id: this.inscription.id,
          stagiaire: this.inscription.stagiaire,
          session: this.inscription.session,
          arriveDate: this.formGroup.value.date,
          inscriptionReference: this.inscription.inscriptionReference,
          exclusionDate: this.inscription.exclusionDate,
          exclusionReference: this.formGroup.value.exclusionReference
        }
      ).subscribe(() => {
          this.onCancel();
        }
      )
    } else this.onCancel();

  }

  onCancel() {
    this.router.navigateByUrl("inscription/" + this.inscription.session.id)
  }
}



