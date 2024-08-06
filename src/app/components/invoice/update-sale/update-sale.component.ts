import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {SaleService} from "../../../services/sale/sale.service";
import {UniteMesureService} from "../../../services/unite-mesure/unite-mesure.service";

@Component({
  selector: 'app-update-sale',
  templateUrl: './update-sale.component.html',
  styleUrls: ['./update-sale.component.css']
})
export class UpdateSaleComponent {

  title: String = "Modifier une prestation dans la facture";
  units: any[] = [];
  unit: any

  formGroup: FormGroup = this.fb.group({
    number: [1, Validators.required],
    u: [],
    qte: ["", Validators.required],
    price: ["", Validators.required],
    obs: ["", Validators.required]


  })


  constructor(
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private invoiceService: InvoiceService,
    private saleService: SaleService,
    private  uniteMesureService: UniteMesureService
  ) {
  }

  footer: any = "";
  benefits: any[] = [];
  selectedBenefit: any
  selected: any;
  invoice: any
  id: any;

  ngOnInit() {

    this.id = this.activateRoute.snapshot.url[1].path

    this.saleService.getSaleById(this.id).subscribe(sale => {

      this.selectedBenefit = sale.benefit
      this.invoice = sale.invoice

      this.formGroup = this.fb.group({
        id: [sale.id],
        number: [sale.number, Validators.required],
        u: [sale.unit.name],
        qte: [sale.quantity, Validators.required],
        price: [sale.price, Validators.required],
        obs: [sale.observation]
      })

      this.uniteMesureService.getUnits().subscribe(
        (res) => {
          if (this.units.length > 0)
            this.unit = this.units[0]
          this.units = res
        })

    })


  }

  onValidate() {

    this.units.forEach(a => {

      if (a.name === this.formGroup.value.u) {
        this.unit = a;

      }
    })


    if (this.selectedBenefit != null) {
      this.saleService.add({
        id: this.formGroup.value.id,
        benefit: this.selectedBenefit,
        invoice: this.invoice,
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
    this.router.navigateByUrl("invoice-detail/" + this.invoice.id)
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
