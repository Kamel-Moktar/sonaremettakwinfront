import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProformaService} from "../../../services/proforma/proforma.service";
import {OffreService} from "../../../services/offre/offre.service";
import {UniteMesureService} from "../../../services/unite-mesure/unite-mesure.service";

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.css']
})
export class UpdateOffreComponent {


  title: String = "Modifier une prestation dans la facture";
  units : any[]=[];
  unit:any

  formGroup: FormGroup = this.fb.group({
    number: [1, Validators.required],
    u:[],
    qte: ["", Validators.required],
    price: ["", Validators.required],
    obs: ["", Validators.required]


  })


  constructor(
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private proformaService: ProformaService,
    private offreService: OffreService,
    private  uniteMesureService :UniteMesureService
  ) {
  }

  footer: any = "";
  benefits: any[] = [];
  selectedBenefit: any
  selected: any;
  proforma: any
  id: any;

  ngOnInit() {

    this.id = this.activateRoute.snapshot.url[1].path

    this.offreService.getOffreById(this.id).subscribe(offre => {

      this.selectedBenefit=offre.benefit
      this.proforma = offre.proforma

      this.formGroup = this.fb.group({
        id: [offre.id],
        number: [offre.number, Validators.required],
        u:[offre.unit.name],
        qte: [offre.quantity, Validators.required],
        price: [offre.price, Validators.required],
        obs: [offre.observation]
      })

      this.uniteMesureService.getUnits().subscribe(
        (res)=>{
          if(this.units.length>0)
            this.unit=this.units[0]
          this.units=res
        })

    })


  }

  onValidate() {

    this.units.forEach(a=>{

      if(a.name===this.formGroup.value.u) {
        this.unit=a;

      }
    })


    if (this.selectedBenefit != null) {
      this.offreService.add({
        id: this.formGroup.value.id,
        benefit: this.selectedBenefit,
        proforma: this.proforma,
        number:this.formGroup.value.number,
        unit:this.unit,
        quantity: this.formGroup.value.qte,
        price: this.formGroup.value.price,
        observation: this.formGroup.value.obs
      }).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez sélectionner une prestation ")


  }

  onCancel() {
    this.router.navigateByUrl("proforma-detail/" + this.proforma.id)
  }

  customerSelected(event: any) {


    const value = event.target.value;


    this.benefits.forEach(u => {
      if (u.shortName == value) {
        this.selectedBenefit = u;
        console.log(this.selectedBenefit)
      }
    })

    // console.log(this.selectedCustomer)

  }


}

