import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {BenefitService} from "../../../services/benefit/benefit.service";
import {InvoiceDetailService} from "../../../services/invoice-detail/invoice-detail.service";
import {InscriptionService} from "../../../services/inscription/inscription.service";


@Component({
  selector: 'app-add-invoice-detail',
  templateUrl: './add-invoice-detail.component.html',
  styleUrls: ['./add-invoice-detail.component.css']
})
export class AddInvoiceDetailComponent {
  title: String = "Ajouter une detail prestation à un stagiaire ";


  formGroup: FormGroup = this.fb.group({
    benefit: ["", Validators.required],
    qte: ["", Validators.required],
    price: ["", Validators.required],
    obs: [""]
  })

  footer: any = "";
  benefits: any[] = [];
  selectedInvoice: any;
  selectedInscription: any;
  phase: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private benefitService: BenefitService,
    private invoiceService: InvoiceService,
    private invoiceDetailService: InvoiceDetailService,
    private inscriptionService: InscriptionService
  ) {
  }


  ngOnInit() {
    let inscriptionId = this.activateRoute.snapshot.url[1].path
    let invoiceId = this.activateRoute.snapshot.url[2].path


    this.invoiceService.getInvoiceById(invoiceId).subscribe(inv => {
      this.selectedInvoice = inv
      this.inscriptionService.getById(inscriptionId).subscribe(ins => {
        this.selectedInscription = ins
        this.invoiceDetailService.getPhase(ins.id, inv.id).subscribe(ph => {

          if (ph.length != 0) this.phase = ph[0]
        })
      })

    })
    this.benefitService.getAll().subscribe(res => {
      this.benefits = res
    })
  }

  onValidate() {
    if (this.formGroup.valid) {
      let benefit
      this.benefits.forEach(u => {
        if (u.designation == this.formGroup.value.benefit) benefit = u
      })
      this.invoiceDetailService.add1({
        benefit: benefit,
        invoice: this.selectedInvoice,
        phase:this.phase,
        inscription: this.selectedInscription,
        qte: this.formGroup.value.qte,
        price: this.formGroup.value.price,
        obs: this.formGroup.value.obs
      }).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez sélectionner une prestation ")
  }

  onCancel() {
    this.router.navigateByUrl("attachement/" + this.selectedInvoice.id)
  }


}
