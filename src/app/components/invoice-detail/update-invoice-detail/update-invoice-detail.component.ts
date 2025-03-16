import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceDetailService} from "../../../services/invoice-detail/invoice-detail.service";

@Component({
  selector: 'app-update-invoice-detail',
  templateUrl: './update-invoice-detail.component.html',
  styleUrls: ['./update-invoice-detail.component.css']
})
export class UpdateInvoiceDetailComponent {

  title: String = "Modifier détail";


  formGroup: FormGroup = this.fb.group({
    qte: ["", Validators.required],
    price: ["", Validators.required],
    obs: [""]
  })

  footer: any = "";
  selected: any;


  constructor(
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private  invoiceDetailService: InvoiceDetailService
  ) {
  }


  ngOnInit() {

    let id = this.activateRoute.snapshot.url[1].path

    this.invoiceDetailService.getById(id).subscribe(
      (res:any) => {
      this.selected = res
      this.formGroup = this.fb.group({
        qte: [res.qte, Validators.required],
        price: [res.price, Validators.required],
        obs: [res.obs]
      })
    })

  }

  onValidate() {
    if (this.formGroup.valid) {
      let invoiceDetail:any={
        id: this.selected.id,
        benefit: this.selected.benefit,
        invoice: this.selected.invoice,
        phase: this.selected.phase,
        inscription: this.selected.inscription,
        booking: this.selected.booking,
        qte: this.formGroup.value.qte,
        price: this.formGroup.value.price,
        obs: this.formGroup.value.obs
      }




      this.invoiceDetailService.update(invoiceDetail).subscribe(() => {

        this.invoiceDetailService.refresh(invoiceDetail).subscribe(res=>{
          this.onCancel();
        })


        } )
    } else alert("Veuillez sélectionner une prestation ")
  }

  onCancel() {
    this.router.navigateByUrl("attachement/" + this.selected.invoice.id)
  }


}


