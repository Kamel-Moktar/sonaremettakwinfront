import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../../../services/stagiaire/stagiaire.service";
import {CustomerService} from "../../../services/customer/customer.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DecoupageService} from "../../../services/decoupage/decoupage.service";
import {InscriptionService} from "../../../services/inscription/inscription.service";
import {SessionService} from "../../../services/session/session.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-add-stagiaire',
  templateUrl: './add-stagiaire.component.html',
  styleUrls: ['./add-stagiaire.component.css']
})
export class AddStagiaireComponent {

  title: String = "Nouveau Stagiaire";


  formGroup: FormGroup = this.fb.group({

    birthDay: [""],
    familyName: ["", Validators.required],
    firstName: ["",Validators.required],
    birthPlace: [""],
    adresse: [""],
    phoneNumber: [""],
    mailAdresse: [""],
    wilaya:[""],
    commune:[""],
    sexe:["M"],
    school:[""],
    gsp:[""]

  })

  fg: FormGroup = this.fb.group({
    name: [""],
    shortName: [""],


  })
  private closeResult = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public stagiaireService: StagiaireService,
    private customerService: CustomerService,
    private modalService: NgbModal,
    private decoupageService :DecoupageService,
    private activateRoute: ActivatedRoute,
    private inscriptionService: InscriptionService,
    private sessionService:SessionService
  ) {
  }

  footer: any = "";
  customers: any[] = [];
  selectedCustomer: any
  selected: any;
  wilayas:any[]=[]
  communes :any[]=[]
  form:any //0 pour le stagiaire et 1pour l'inscription



  ngOnInit() {

    this.form=this.activateRoute.snapshot.url[1];
    this.customerService.getAll().subscribe((res:any )=> {
      this.customers = res
    })

    this.decoupageService.getWilaya().subscribe((res:any)=>{
      this.wilayas=res
      this.wilayas.push({wilayaCode:'0',wilayaName:"ETRANGER"})
    })



  }

  onValidate() {

    if (this.formGroup.valid && this.selectedCustomer) {
      let birthPlace=""
      if(this.formGroup.value.wilaya=="ETRANGER") birthPlace=this.formGroup.value.birthPlace
      else birthPlace=this.formGroup.value.commune+ "-W."+this.formGroup.value.wilaya

      this.stagiaireService.add({
        firstName: this.formGroup.value.firstName,
        familyName: this.formGroup.value.familyName,
        birthDay: this.formGroup.value.birthDay,
        birthPlace: birthPlace,
        adresse: this.formGroup.value.adresse,
        phoneNumber: this.formGroup.value.phoneNumber,
        mailAdresse: this.formGroup.value.mailAdresse,
        customer: this.selectedCustomer,
        sexe: this.formGroup.value.sexe,
        schoolLevel: this.formGroup.value.school,
        gsp: this.formGroup.value.gsp

      }).subscribe( stag => {
         if(this.form!=0){
           this.sessionService.getById(this.form).subscribe(ses=>{
             this.inscriptionService.add({
               stagiaire:stag,
               session:ses
             }).subscribe()
           })
         }
          this.onCancel();
        }
      )
    } else alert("Veuillez remplir les champs requis ")


  }

  onCancel() {
    if(this.form==0)
    this.router.navigateByUrl("stagiaire")
    else this.router.navigateByUrl("inscription/"+this.form)
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
      this.selectedCustomer = result;
      let action = document.getElementById("action");
      if (action) action.setAttribute("value", this.selectedCustomer.shortName)
    }, (reason) => {
      this.closeResult = `Dismissed ${AddStagiaireComponent.getDismissReason(reason)}`;
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

  onWilayaSelect() {
    let wilayaName=this.formGroup.value.wilaya

console.log(wilayaName)

    this.decoupageService.getCommune(wilayaName).subscribe((res:any)=>{
      this.communes=res
    })
  }
}
