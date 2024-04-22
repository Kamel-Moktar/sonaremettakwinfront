import { Component } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Facturation & Recouvrement';


  constructor(private router:Router) {
  }








  oncSecurity() {

  }

  onEnverenment() {

  }



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
}
