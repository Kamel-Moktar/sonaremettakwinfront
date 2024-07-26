import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AcheminementService} from "../../../services/acheminement/acheminement.service";
import {InvoiceService} from "../../../services/invoice/invoice.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-detail-acheminement',
  templateUrl: './detail-acheminement.component.html',
  styleUrls: ['./detail-acheminement.component.css']
})
export class DetailAcheminementComponent {
  closeResult = ""

  title: any = "Detail de bordereau d'envoi ";
  invoices: any[] = [];
  shippingSlipId: any = 0
  selectedShippingSlip: any
  private selectedInvoice: any;
  formGroup: any = this.fb.group({
    number: [],
    shortName: [],
    date: []
  });
  shippingSlipInvoices: any[] = []



  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              public shippingSlipService: AcheminementService,
              public invoiceService: InvoiceService,
              private modalService: NgbModal,
              private fb:FormBuilder
  ) {}

  ngOnInit() {
    this.shippingSlipId = this.activateRoute.snapshot.url[1].path
    this.shippingSlipService.getInvoiceByShippingSlip(this.shippingSlipId).subscribe(res=>{
      this.shippingSlipInvoices=res
      }
    )

    this.shippingSlipService.getShippingSlipById(this.shippingSlipId).subscribe((res) => {
      this.selectedShippingSlip = res
    })

    this.refreshInvoices({number: "*", shortName: "*", date: "*"})

  }

  onAddLigne() {}

  onUpdate(a: any) {
    this.router.navigateByUrl("update-detail-acheminement/" + a.id)

  }

  ouvreNouvelOnglet(url: string) {
    window.open(url, "_blank");
  }

  onCancel() {
    this.router.navigateByUrl("acheminement")
  }


  onDelete(invoice: any) {
    if (confirm("Voulez vous vraiment supprimer cet ligne  ?")) {
      this.shippingSlipService.deleteInvoice(invoice,this.shippingSlipId).subscribe(() => {
        this.refresh()
      })
    }
  }

  onPrint1() {
    this.ouvreNouvelOnglet("print-shippingslip/" + this.shippingSlipId)
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
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: "lg"}).result.then((result) => {
      this.selectedInvoice = result;
      this.add();
    }, (reason) => {
      this.closeResult = `Dismissed ${DetailAcheminementComponent.getDismissReason(reason)}`;
    });
  }

  public add(){
     let factureExist=false
    for(let e of  this.shippingSlipInvoices){
      if(this.selectedInvoice.invoice.id==e.invoice.id) {
        factureExist=true
        break
      }
    }
    if(factureExist) {alert("la facture choisie est déjà sur la liste")
    }else{
    this.shippingSlipService.addInvoice(
      {
        invoice:this.selectedInvoice.invoice,
        shippingSlip: this.selectedShippingSlip,
        nbrPage:this.selectedInvoice.fg.value.nbrPage,
        obs:this.selectedInvoice.fg.value.obs
      }
    ).subscribe(res=>
    {
      this.refresh()
    })
  }
  }

refresh(){
  this.shippingSlipService.getInvoiceByShippingSlip(this.shippingSlipId).subscribe(res=>{
      this.shippingSlipInvoices=res
    }
  )
}

  onSearch() {
    let number = this.formGroup.value.number
    let shortName = this.formGroup.value.shortName
    let date = this.formGroup.value.date
    if (number ==null) number = '*'
    if (shortName ==null) shortName = '*'
    if (date ==null) date = "*"

    console.log({number: number, shortName: shortName, date: date})
    this.refreshInvoices({number: number, shortName: shortName, date: date})
  }

  refreshInvoices(searchParam: any) {

    this.invoiceService.getAllParam(searchParam).subscribe((ls) => {
      this.invoices = []
      ls.forEach(e => {
          this.invoices.push({
            invoice: e,
            fg: this.fb.group({
              nbrPage: ["", [Validators.required, Validators.min(0)]],
              obs: [""]
            })
          })

        }
      )
    })
  }

}

