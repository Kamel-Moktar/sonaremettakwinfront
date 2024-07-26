import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceService} from "../../services/invoice/invoice.service";
import {PaymentService} from "../../services/payment/payment.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-encaissement',
  templateUrl: './encaissement.component.html',
  styleUrls: ['./encaissement.component.css']
})
export class EncaissementComponent {

  closeResult = ""
  title: any = "Détail du payment ";
  lignes: any[] = [];
  invoices: any[] = [];
  paymentId: any = 0;
  payment: any
  selectedInvoice: any
  formGroup: any = this.fb.group({
    number: [],
    shortName: [],
    date: []
  });


  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              public paymentService: PaymentService,
              public invoiceService: InvoiceService,
              private modalService: NgbModal,
              private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.paymentId = this.activateRoute.snapshot.url[1].path
    this.refresh()
  }

  refresh() {
    this.paymentService.getPaymentById(this.paymentId).subscribe(
      (res) => {
        this.payment = res
        this.paymentService.getEncaissementByPayment(this.paymentId).subscribe(
          (ls) => {
            this.lignes = ls
          })
      })
    this.refreshInvoices({number: "*", shortName: "*", date: "*"})
  }

  static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openInvoiceModal(content: any) {
    this.formGroup = this.fb.group({
      number: [],
      shortName: [],
      date: []
    });

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: "lg"}).result.then((result) => {
      this.selectedInvoice = result;
      this.onAdd();
    }, (reason) => {
      this.closeResult = `Dismissed ${EncaissementComponent.getDismissReason(reason)}`;
    });
  }


  onUpdate(a: any) {
    this.router.navigateByUrl("update-encaissement/" + a.id)

  }


  onCancel() {
    this.router.navigateByUrl("payment")
  }

  onAdd() {

    if (this.selectedInvoice.fg.valid) {
      if (this.selectedInvoice.fg.value.amount > 0) {
        if (this.selectedInvoice.fg.value.amount <= this.selectedInvoice.invoice.remains) {
          this.paymentService.addEncaissement({
            invoice: this.selectedInvoice.invoice,
            payment: this.payment,
            amount: this.selectedInvoice.fg.value.amount,
            obs: this.selectedInvoice.fg.value.obs
          }).subscribe(res => {
            this.refresh()
          })
        } else alert("Le montant de l'encaissement est supérieure  au montant restant ")
      } else alert("Le montan encaisse doit etre supérieur  à 0 ")

    } else alert("Veuillez introduire  le montant encaissé")
  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer cette ligne  ?")) {
      this.paymentService.deleteEncaissement(a).subscribe(() => {
        this.refresh()
      //  this.refreshInvoices({number: number, shortName: shortName, date: date})
      })
    }
  }


  onSearch() {
    let number = this.formGroup.value.number
    let shortName = this.formGroup.value.shortName
    let date = this.formGroup.value.date
    if (number ==null) number = '*'
    if (shortName ==null) shortName = '*'
    if (date ==null) date = "*"
    this.refreshInvoices({number: number, shortName: shortName, date: date})
  }

  refreshInvoices(searchParam: any) {
    this.invoiceService.getDebtsParam(searchParam).subscribe((ls) => {
      this.invoices = []
      ls.forEach(e => {
          this.invoices.push({
            invoice: e,
            fg: this.fb.group({
              amount: [e.remains, [Validators.required, Validators.min(0)]],
              obs: [""]
            })
          })

        }
      )
    })
  }
}


