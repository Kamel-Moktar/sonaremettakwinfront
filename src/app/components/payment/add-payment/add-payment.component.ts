import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PaymentService} from "../../../services/payment/payment.service";
import {CustomerService} from "../../../services/customer/customer.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent {

  title: String = "Ajouter un règlement ";


  formGroup: FormGroup = this.fb.group({
    date: ["", Validators.required],
    amount: ["", Validators.required],
    reference: ["", Validators.required],
  })
  fg: FormGroup = this.fb.group({
    name: [""],

    shortName: [""],
  })
  private closeResult: any="";
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private paymentService: PaymentService,
    private customerService: CustomerService,

  private modalService: NgbModal
  ) {
  }

  footer: any = "";
  customers: any[] = [];
  selectedCustomer: any = null
  selected: any;

  ngOnInit() {
    this.customerService.getAll().subscribe((res:any) => {
      this.customers = res
      this.customers.push({id: "0", shortName: "Non Localisé"})
    })
  }

  onValidate() {
    if (this.formGroup.valid) {
      this.paymentService.add({
        date: this.formGroup.value.date,
        amount: this.formGroup.value.amount,
        reference: this.formGroup.value.reference,
        customer: this.selectedCustomer
      }).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez remplir touts les champs Obligatoires ")


  }

  onCancel() {
    this.router.navigateByUrl("payment")
  }

  customerSelected(event: any) {
    const value = event.target.value;

    console.log(event.target)


    this.customers.forEach(u => {
      if (u.shortName == value) {
        this.selectedCustomer = u;

      }
    })


    if (value == "Non Localisé") {
      this.selectedCustomer = null;

    }


  }


  onSearch() {

    this.customerService.getAllParam({name: this.fg.value.name, shortName: this.fg.value.shortName}).subscribe((res:any) => {
      this.customers = res

    })
  }

  openModal(content: any) {


    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: "lg"}).result.then((result) => {
      this.selectedCustomer = result;
      let action = document.getElementById("action");
      if (action) action.setAttribute("value", this.selectedCustomer.shortName)
    }, (reason) => {
      this.closeResult = `Dismissed ${AddPaymentComponent.getDismissReason(reason)}`;
    });
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

}

