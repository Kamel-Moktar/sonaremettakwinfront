import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {BenefitService} from "../../../services/benefit/benefit.service";
import {SaleService} from "../../../services/sale/sale.service";
import {UniteMesureService} from "../../../services/unite-mesure/unite-mesure.service";

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent {

  title: String = "Ajouter une prestation à la facture";


  formGroup: FormGroup = this.fb.group({
    number: [1, Validators.required],
    qte: ["", Validators.required],
    price: ["", Validators.required],
    obs: [""],
    benefit: ["", Validators.required],
    u: ["", Validators.required]

  })

  footer: any = "";
  benefits: any[] = [];
  selected: any;
  invoice: any
  invoiceId: any;
  units: any[] = [];


  constructor(
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private invoiceService: InvoiceService,
    private saleService: SaleService,
    private benefitService: BenefitService,
    private  uniteMesureService: UniteMesureService
  ) {
  }


  ngOnInit() {

    this.invoiceId = this.activateRoute.snapshot.url[1].path
    this.benefitService.getAll().subscribe(res => {
      this.benefits = res

    })

    this.invoiceService.getInvoiceById(this.invoiceId).subscribe(
      (res) => {
        this.invoice = res
      })

    this.uniteMesureService.getUnits().subscribe(
      (res) => {
        this.units = res


      })
  }

  onValidate() {




    if (this.formGroup.valid) {
      let benefit
      this.benefits.forEach(u => {
        if (u.designation == this.formGroup.value.benefit) benefit = u
      })

      let unit
      this.units.forEach(u => {
        if (u.name == this.formGroup.value.u) unit = u
      })

      this.saleService.add({
        benefit:benefit,
        invoice: this.invoice,
        number: this.formGroup.value.number,
        unit: unit,
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
    this.router.navigateByUrl("invoice-detail/" + this.invoice.id)
  }




}

