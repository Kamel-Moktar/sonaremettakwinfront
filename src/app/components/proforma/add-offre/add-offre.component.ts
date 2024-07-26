import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {OffreService} from "../../../services/offre/offre.service";
import {BenefitService} from "../../../services/benefit/benefit.service";
import {UniteMesureService} from "../../../services/unite-mesure/unite-mesure.service";
import {ProformaService} from "../../../services/proforma/proforma.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent {

  title: String = "Ajouter une prestation à la facture proforma ";


  formGroup: FormGroup = this.fb.group({
    number: [1, Validators.required],
    qte: ["", Validators.required],
    price: ["", Validators.required],
    obs: ["", Validators.required]


  })

  footer: any = "";
  benefits: any[] = [];
  selectedBenefit: any
  selected: any;
  proforma: any
  proformaId: any;
  units: any[] = [];
  unit: any

  constructor(
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private proformaService: ProformaService,
    private offreService: OffreService,
    private benefitService: BenefitService,
    private  uniteMesureService: UniteMesureService,

  ) {
  }


  ngOnInit() {

    this.proformaId = this.activateRoute.snapshot.url[1].path
    this.benefitService.getAll().subscribe(res => {
      this.benefits = res
      if (this.benefits.length > 0)
        this.selectedBenefit = this.benefits[0]
    })

    this.proformaService.getProformaById(this.proformaId).subscribe(
      (res) => {
        this.proforma = res
      })

    this.uniteMesureService.getUnits().subscribe(
      (res) => {
        this.units = res
        if (this.units.length > 0)
          this.unit = this.units[0]

      })
  }

  onValidate() {

    if (this.selectedBenefit != null) {
      this.offreService.add({
        benefit: this.selectedBenefit,
        proforma: this.proforma,
        number: this.formGroup.value.number,
        unit: this.unit,
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
    let value = event.target.value;
    console.log(value)
    this.benefits.forEach(u => {

      if (u.designation === value) {
        this.selectedBenefit = u;

      }
    })
    // console.log(this.selectedCustomer)
  }

  unitSelected(event: any) {
    let value = event.target.value;
    console.log(value)
    this.units.forEach(u => {

      if (u.name === value) {
        this.unit = u;

      }
    })
  }



}


