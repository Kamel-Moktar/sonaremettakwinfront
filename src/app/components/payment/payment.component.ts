import {Component} from '@angular/core';

import {Router} from "@angular/router";
import {PaymentService} from "../../services/payment/payment.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  payments?: any[];
  title: any = 'Règlement ';

  constructor(public paymentService: PaymentService, private router: Router) {
  }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(): void {
    this.paymentService.getAll().subscribe(
      res => {
        this.payments = res
      })
  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {

      this.paymentService.delete(a).subscribe(() => {
        this.refresh()
      })
    }
  }


  onUpdate(a: any) {

    this.router.navigateByUrl("update-payment/" + a.id)
  }

  onAddPayment() {
    this.router.navigateByUrl("addpayment")
  }

  onDetail(a: any) {
    this.router.navigateByUrl("encaissement/" + a.id)
  }
}
