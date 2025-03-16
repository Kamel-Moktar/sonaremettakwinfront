import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProformaService} from "../../../services/proforma/proforma.service";
import {CustomerService} from "../../../services/customer/customer.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-proforma',
  templateUrl: './add-proforma.component.html',
  styleUrls: ['./add-proforma.component.css']
})
export class AddProformaComponent {
  title:String="Nouvelle facture proforma";


  formGroup: FormGroup = this.fb.group({
    number: ["", Validators.required],
    date: ["", Validators.required],
    object: ["", Validators.required],
    reference: ["", Validators.required],


  })

  fg: FormGroup = this.fb.group({
    name: [""],
    shortName: [""],


  })
  private closeResult="";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private proformaService: ProformaService,
    private customerService :CustomerService,
    private modalService: NgbModal
  ) {
  }

  footer: any="";
  customers: any[]=[];
  selectedCustomer :any
  selected: any;

  ngOnInit(){
    this.customerService.getAll().subscribe((res:any)=>{
      this.customers=res
      if(this.customers.length>0)
        this.selectedCustomer=this.customers[0]
    })
  }

  onValidate() {

    if(this.selectedCustomer!=null){
      this.proformaService.add({
        number: this.formGroup.value.number,
        date: this.formGroup.value.date,
        object: this.formGroup.value.object,
        reference: this.formGroup.value.reference,
        customer:this.selectedCustomer


      }).subscribe( ()=>{
          this.onCancel();
        }

      )
    }else alert("Veuillez selectionner un client ")


  }

  onCancel() {
    this.router.navigateByUrl("proforma")
  }

  customerSelected(event:any) {



    const value = event.target.value;


    this.customers.forEach(u=>{
      if(u.shortName==value) {this.selectedCustomer=u;
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
      this.selectedCustomer = result;
      let action = document.getElementById("action");
      if (action) action.setAttribute("value", this.selectedCustomer.shortName)
    }, (reason) => {
      this.closeResult = `Dismissed ${AddProformaComponent.getDismissReason(reason)}`;
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

