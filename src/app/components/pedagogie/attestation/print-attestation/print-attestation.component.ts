import {Component} from '@angular/core';
import {InscriptionService} from "../../../../services/inscription/inscription.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-print-attestation',
  templateUrl: './print-attestation.component.html',
  styleUrls: ['./print-attestation.component.css']
})
export class PrintAttestationComponent {
  title: any = "Attestation";
  inscription: any
  edition = new Date()

  constructor(private inscriptionService: InscriptionService,
              private  router: Router,
              private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    let inscriptionId = this.activateRoute.snapshot.url[1]
    this.inscriptionService.getById(inscriptionId).subscribe(res => {
      this.inscription = res
    })
  }

  onCancel() {
    this.router.navigateByUrl("inscription/" + this.inscription.session.id)
  }
}
