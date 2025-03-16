import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {CustomerService} from "../../../services/customer/customer.service";
import {PaymentService} from "../../../services/payment/payment.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UtilsService} from "../../../services/utils/utils.service";

@Component({
  selector: 'app-update-payment',
  templateUrl: './update-payment.component.html',
  styleUrls: ['./update-payment.component.css']
})
export class UpdatePaymentComponent {
  title: String = "Nouvelle facture";


  formGroup: FormGroup = this.fb.group({
    date: ["", Validators.required],
    montant: ["", Validators.required],
    reference: ["", Validators.required],
  })
  private closeResult: any = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private paymentService: PaymentService,
    private customerService: CustomerService,
    private modalService: NgbModal,
    private activateRoute :ActivatedRoute,
    private utils :UtilsService
  ) {
  }

  footer: any = "";
  customers: any[] = [];
  selectedCustomer: any
  selected: any;
  fg: FormGroup = this.fb.group({
    name: [""],
    shortName: [""],
  })
  ngOnInit() {

    let paymentId=this.activateRoute.snapshot.url[1].path
    this.paymentService.getPaymentById(paymentId).subscribe((res:any)=>{
      this.selected=res
       this.showCustomer(res)
      this.formGroup= this.fb.group({
        date: [this.utils.formatDate(res.date), Validators.required],
        montant: [res.amount, Validators.required],
        reference: [res.reference, Validators.required],
    })
    this.customerService.getAll().subscribe((res:any)=> {
      this.customers = res

      })

    })
  }

  onValidate() {

    if (this.formGroup.valid) {
      this.paymentService.update({
        id:this.selected.id,
        date: this.formGroup.value.date,
        amount: this.formGroup.value.montant,
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


    this.customers.forEach(u => {
      if (u.shortName == value) {
        this.selectedCustomer = u;
        console.log(this.selectedCustomer)
      }
    })

    // console.log(this.selectedCustomer)

  }


  onSearch() {

    this.customerService.getAllParam({name: this.fg.value.name, shortName: this.fg.value.shortName}).subscribe((res:any) => {
      this.customers = res

    })
  }

  openModal(content: any) {


    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: "lg"}).result.then((result) => {
     this.showCustomer(result)
      let customer = document.getElementById("action");
      if (customer) customer.setAttribute("value", this.selectedCustomer.shortName)
    }, (reason) => {
      this.closeResult = `Dismissed ${UpdatePaymentComponent.getDismissReason(reason)}`;
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

  public showCustomer(c: any){
    this.selectedCustomer = c;
    let customer = document.getElementById("customer");
    if (customer) customer.setAttribute("value", this.selectedCustomer.shortName)
  }

}
