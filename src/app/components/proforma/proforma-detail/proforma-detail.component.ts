import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProformaService} from "../../../services/proforma/proforma.service";
import {OffreService} from "../../../services/offre/offre.service";
import {BenefitService} from "../../../services/benefit/benefit.service";

@Component({
  selector: 'app-proforma-detail',
  templateUrl: './proforma-detail.component.html',
  styleUrls: ['./proforma-detail.component.css']
})
export class ProformaDetailComponent {

  printMode: any = false
  title: any = "Detail de la facture ";
  lignes: any[] = [];
  proformaId: any = 0;
  benefits: any[] = []
  proforma: any
  amountTax9: any;
  amountTax19: any;
  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              public proformaService: ProformaService,
              private offreService: OffreService,
              private benefitService: BenefitService) {

  }

  ngOnInit() {
    this.proformaId = this.activateRoute.snapshot.url[1].path

     this.offreService.getOffreByProformaByTva({proformaId:this.proformaId,tauxTva:0.09}).subscribe(res=>{

       this.amountTax9=res
     })

    this.offreService.getOffreByProformaByTva({proformaId:this.proformaId,tauxTva:0.19}).subscribe(res=>{
      this.amountTax19=res
    })
    this.benefitService.getAll().subscribe(
      (res:any)=> {
        this.benefits = res
      })

    this.proformaService.getProformaById(this.proformaId).subscribe(
      (res:any) => {
        this.proforma = res
        this.offreService.getOffreByProforma(this.proforma).subscribe(
          (res:any)=> {
            this.lignes = res
          })


      })

  }

  // convertir-nombre-lettre



  onAddLigne() {

  }

  onUpdate(a: any) {
    this.router.navigateByUrl("update-offre/" + a.id)

  }

  ouvreNouvelOnglet(url: string) {
    window.open(url, "_blank");
  }


  onCancel() {
    this.router.navigateByUrl("proforma")
  }

  onAdd() {
    this.router.navigateByUrl("add-offre/" + this.proforma.id)
  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer cet ligne  ?")) {

      this.offreService.delete(a).subscribe(() => {
        this.proformaService.getProformaById(this.proformaId).subscribe(
          (res) => {
            this.proforma = res
            this.offreService.getOffreByProforma(this.proforma).subscribe(
              (res:any)=> {
                this.lignes = res
              })


          })
      })
    }
  }

  onPrint1() {
    this.router.navigateByUrl("print-proforma/"+this.proformaId)
  }
}
