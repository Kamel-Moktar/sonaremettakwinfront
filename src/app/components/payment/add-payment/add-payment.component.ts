import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PaymentService} from "../../../services/payment/payment.service";
import {CustomerService} from "../../../services/customer/customer.service";

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private paymentService: PaymentService,
    private customerService: CustomerService
  ) {
  }

  footer: any = "";
  customers: any[] = [];
  selectedCustomer: any = null
  selected: any;

  ngOnInit() {
    this.customerService.getAll().subscribe(res => {
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
}

