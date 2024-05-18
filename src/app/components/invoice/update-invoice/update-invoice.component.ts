import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceService} from "../../../services/invoice/invoice.service";

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.css']
})
export class UpdateInvoiceComponent {

  title: String = "Modifier facture";

  formGroup: FormGroup = this.fb.group({
    invoiceDate: ["", Validators.required],
    object: ["", Validators.required],
    reference: ["", Validators.required]
  })
  invoice: any;
  invoiceId: any


  constructor(private fb: FormBuilder,
              private router: Router,
              private invoiceService: InvoiceService,
              private activateRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.invoiceId = this.activateRoute.snapshot.url[1]
    this.invoiceService.getInvoiceById(this.invoiceId).subscribe(res => {
      this.invoice = res
      let s: String = this.invoice.date.toString()

      let year = s.slice(0, 4)
      let month = s.slice(5, 7)
      let day = s.slice(8, 10)
      let d = year + "-" + month + "-" + day


      this.formGroup = this.fb.group({
          invoiceDate: [d, Validators.required],
          object: [this.invoice.object],
          reference: [this.invoice.reference]
        }
      )
    })
  }

  onValidate() {
    if (this.formGroup.valid) {
      this.invoiceService.update({
        id:this.invoice.id,
        date: this.formGroup.value.invoiceDate,
        object: this.formGroup.value.object,
        reference: this.formGroup.value.reference,
        customer:this.invoice.customer
      }).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez selectionner un client ")
  }

  onCancel() {
    this.router.navigateByUrl("invoice")
  }


}
