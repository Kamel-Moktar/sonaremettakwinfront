import {Component} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";

import {SessionService} from "../../../services/session/session.service";
import {InscriptionService} from "../../../services/inscription/inscription.service";

@Component({
  selector: 'app-print-list-stagiaire',
  templateUrl: './print-list-stagiaire.component.html',
  styleUrls: ['./print-list-stagiaire.component.css']
})
export class PrintListStagiaireComponent {

  session: any;
  lignes: any;
  sessionId: any
  title = "Liste des stagiaires de l'action  ";


  constructor(public sessionService: SessionService,
              private activateRoute: ActivatedRoute,
              private inscriptionService: InscriptionService,
              private router: Router
  ) {

  }

  ngOnInit() {
    this.sessionId = this.activateRoute.snapshot.url[1].path

    this.sessionService.getById(this.sessionId).subscribe(
      (invoiceRes) => {
        this.session = invoiceRes
        this.inscriptionService.getAllBySession(this.sessionId).subscribe(
          (res) => {
            this.lignes = res

          })
      })
  }

  onPrint() {
    let printDocument: any = document.getElementById("printPart")
    let ancInner = document.body.innerHTML;
    if (printDocument != null) {
      document.body.innerHTML = printDocument.innerHTML;
      window.print()
      document.body.innerHTML = ancInner
      this.router.navigateByUrl("invoice")

    }
  }



  onCancel() {
    this.router.navigateByUrl("inscription/" + this.sessionId)
  }
}

