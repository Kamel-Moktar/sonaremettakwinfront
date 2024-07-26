import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionService} from "../../../services/session/session.service";

import { NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PhaseService} from "../../../services/phase/phase.service";

@Component({
  selector: 'app-add-phase',
  templateUrl: './add-phase.component.html',
  styleUrls: ['./add-phase.component.css']
})
export class AddPhaseComponent {



  title: String = "Nouvelle Phase d'une session de formation ";


  formGroup: FormGroup = this.fb.group({
    name: ["", Validators.required],
    dd: ["", Validators.required],
    df: ["", Validators.required],



  })

  fg: FormGroup = this.fb.group({
    name: [""],
    domaine: [""]
  })
  footer: any = "";
  session: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sessionService: SessionService,
    private phaseService: PhaseService,
    private activateRoute: ActivatedRoute
  ) {


  }

  ngOnInit() {



    let session_id = this.activateRoute.snapshot.url[1].path
    if (session_id != "0") {
      this.sessionService.getById(session_id).subscribe(res => {
        this.session = res

      })
    }

  }

  onValidate() {


    if (this.formGroup.valid && this.session) {
      this.phaseService.add({
        name: this.formGroup.value.name,
        startDate: this.formGroup.value.dd,
        endDate: this.formGroup.value.df,
        session: this.session

      }).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez remplir les rebiques requis")


  }

  onCancel() {
    this.router.navigateByUrl("phase/"+this.session.id)
  }











}



