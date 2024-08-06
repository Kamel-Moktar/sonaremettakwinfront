import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {InscriptionService} from "../../../services/inscription/inscription.service";

@Component({
  selector: 'app-declencheur',
  templateUrl: './declencheur.component.html',
  styleUrls: ['./declencheur.component.css']
})
export class DeclencheurComponent {


  title: String = "Bon de commande ou note d'inscription ";

  inscription: any
  inscriptions :any[]=[]
  formGroup: FormGroup = this.fb.group({
    declencheur: ["", Validators.required],


  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private inscriptionService: InscriptionService,
    private activateRoute: ActivatedRoute
  ) {
  }

  footer: any = "";

  ngOnInit() {
    let inscriptionId = this.activateRoute.snapshot.url[1]

    this.inscriptionService.getById(inscriptionId).subscribe(ins => {
      this.inscription = ins
      this.inscriptionService.getAllBySession(ins.session.id).subscribe(inss=>{
        this.inscriptions=inss
      })

      this.formGroup = this.fb.group({
        declencheur: [ins.inscriptionReference, Validators.required],


      })
    })


  }

  onValidate() {
    if (this.formGroup.valid) {
      this.inscriptionService.update(
        {
          id: this.inscription.id,
          stagiaire:this.inscription.stagiaire,
          session:this.inscription.session,
          arriveDate:this.inscription.arriveDate,
          inscriptionReference: this.formGroup.value.declencheur,
          exclusionDate:this.inscription.exclusionDate,
          exclusionReference: this.inscription.exclusionReference
        }
      ).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez remplir les rebiques requis")

  }

  onCancel() {
    this.router.navigateByUrl("inscription/"+this.inscription.session.id)
  }

  onValiderPromotion() {
    if (this.formGroup.valid) {
    this.inscriptions.forEach(i=>{

        this.inscriptionService.update(
          {
            id: i.id,
            stagiaire:i.stagiaire,
            session:i.session,
            arriveDate:i.arriveDate,
            inscriptionReference: this.formGroup.value.declencheur,
            exclusionDate:i.exclusionDate,
            exclusionReference: i.exclusionReference
          }
        ).subscribe(() => {
            this.onCancel();
          }
        )



    })} else alert("Veuillez remplir les rebiques requis")
  }
}


