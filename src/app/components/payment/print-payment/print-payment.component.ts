import {Component} from '@angular/core';
import {SessionService} from "../../../services/session/session.service";
import {ActivatedRoute, Router} from "@angular/router";
import {InscriptionService} from "../../../services/inscription/inscription.service";
import {EncaissementComponent} from "../../encaissement/encaissement.component";
import {PaymentService} from "../../../services/payment/payment.service";

@Component({
  selector: 'app-print-payment',
  templateUrl: './print-payment.component.html',
  styleUrls: ['./print-payment.component.css']
})
export class PrintPaymentComponent {


  title = "Etat d'encaissement ";
  paiementId:any

  constructor(public sessionService: SessionService,
              private activateRoute: ActivatedRoute,
              private  paymentService: PaymentService,
              private router: Router
  ) {

  }

  ngOnInit() {



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
    this.router.navigateByUrl("payment")
  }
}


