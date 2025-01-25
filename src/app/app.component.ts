import { Component } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'SONAREM ETTAKWINE';

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
    // this.router.navigateByUrl("encasement")
  }

  onProForma() {
    this.router.navigateByUrl("proforma")
  }

  onAttestationCalled() {
    this.router.navigateByUrl("attestation")
  }

  onInsciptionCalled() {
    this.router.navigateByUrl("inscription/0")
  }

  onActionCalled() {
    this.router.navigateByUrl("action")
  }

  onSessionClic() {
    this.router.navigateByUrl("session")
  }

  onPhaseCalled() {
    this.router.navigateByUrl("phase/0")
  }

  onDomaineCalled() {
    this.router.navigateByUrl("domaine")
  }

  onStagiaireCalled() {
    this.router.navigateByUrl("stagiaire")
  }

  onHotelCalled() {
    this.router.navigateByUrl("hotel")
  }

  onReservatioCalled() {
    this.router.navigateByUrl("reservation/0")
  }

  onSearchStagiaire(){
    this.router.navigateByUrl("search-stagiaire")
  }

  onChronogramme() {
    this.router.navigateByUrl("chronogramme")
  }

  onModuleCalled() {
    this.router.navigateByUrl("module")
  }
}
