import { Component } from '@angular/core';
import {ProformaService} from "../../../services/proforma/proforma.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OffreService} from "../../../services/offre/offre.service";

@Component({
  selector: 'app-print-proforma',
  templateUrl: './print-proforma.component.html',
  styleUrls: ['./print-proforma.component.css']
})
export class PrintProformaComponent {


  proforma: any;
  lignes: any;
  proformaId: any
  title= "Impression de la facture proforma ";


  constructor(public proformaService: ProformaService,
              private activateRoute: ActivatedRoute,
              private offreService: OffreService,
              private router :Router

  ) {

  }

  ngOnInit() {
    this.proformaId = this.activateRoute.snapshot.url[1].path

    this.proformaService.getProformaById(this.proformaId).subscribe(
      (proformaRes) => {
        this.proforma = proformaRes
        this.offreService.getOffreByProforma(this.proforma).subscribe(
          (res) => {
            this.lignes = res

          })
      })
  }

  onPrint() {
    let printDocument: any = document.getElementById("printPart")
    let ancInner=document.body.innerHTML;
    if (printDocument != null) {
      document.body.innerHTML = printDocument.innerHTML;
      window.print()
      document.body.innerHTML=ancInner
      this.router.navigateByUrl("proforma")
      // window.location.reload()
    }
  }
  intPart() {
    let i = Math.trunc(this.proforma.amountIncludingTax)
    return Math.floor(this.proforma.amountIncludingTax)
  }
  decimalPart() {
    return (this.proforma.amountIncludingTax - Math.trunc(this.proforma.amountIncludingTax)) * 100
  }
  onCancel() {
    this.router.navigateByUrl("proforma-detail/"+this.proformaId)
  }
}
