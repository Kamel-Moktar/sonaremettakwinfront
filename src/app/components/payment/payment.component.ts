import {Component} from '@angular/core';

import {Router} from "@angular/router";
import {PaymentService} from "../../services/payment/payment.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CustomerService} from "../../services/customer/customer.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  payments?: any[];
  title: any = 'Règlement ';
  customers: any[]=[];



  private selectedCustomer:any;
  private closeResult: any;
  constructor(public paymentService: PaymentService,
              private router: Router,
              private fb:FormBuilder,

  ) {
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


  openPrintList() {
    this.router.navigateByUrl("print-payment")
  }

  onIdentification(a: any) {
    this.paymentService.identification(a.id).subscribe(res=>{
      console.log(res)
    })

  }
}
