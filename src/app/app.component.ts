import { Component } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Facturation & Recouvrement';

  constructor(private router:Router) {}



  onCustomerCalled() {
  this.router.navigateByUrl("customer");
  }

  onUniteMesureClic() {
    this.router.navigateByUrl("unitemesure");//afficher le compenent das la zone dynamyque
  }

  onPrestationCalled() {
   this.router.navigateByUrl("benefit")
  }

  onInvoiceCalled() {
    this.router.navigateByUrl("invoice")
  }

  oncAcheminement() {
    this.router.navigateByUrl("acheminement")
  }

  onReglement() {
    this.router.navigateByUrl("payment")
  }

  onCA() {
    this.router.navigateByUrl("turnover")
  }

  oncCreance() {
    this.router.navigateByUrl("debts")
  }

  onEncaissement() {
    this.router.navigateByUrl("encasement")
  }

  onProForma() {
    // this.router.navigateByUrl("payment")
  }
}
