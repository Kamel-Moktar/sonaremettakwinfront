import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../../../services/stagiaire/stagiaire.service";
import {CustomerService} from "../../../services/customer/customer.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DecoupageService} from "../../../services/decoupage/decoupage.service";
import {UtilsService} from "../../../services/utils/utils.service";
import {InscriptionService} from "../../../services/inscription/inscription.service";

@Component({
  selector: 'app-update-stagiaire',
  templateUrl: './update-stagiaire.component.html',
  styleUrls: ['./update-stagiaire.component.css']
})
export class UpdateStagiaireComponent {

  title: String = "Update stagiaire";
  inscriptionId: any
  inscription: any

  formGroup: FormGroup = this.fb.group({

    birthDay: [""],
    familyName: ["", Validators.required],
    firstName: ["", Validators.required],
    birthPlace: [""],
    adresse: [""],
    phoneNumber: [""],
    mailAdresse: [""],
    wilaya: [""],
    commune: [""],

    school: [""],
    gsp: [""],
    sexe: [""]
  })

  fg: FormGroup = this.fb.group({
    name: [""],
    shortName: [""],


  })
  private closeResult = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public  stagiaireService: StagiaireService,
    private customerService: CustomerService,
    private modalService: NgbModal,
    private decoupageService: DecoupageService,
    private activateRoute: ActivatedRoute,
    private utils: UtilsService,
    private inscriptionService: InscriptionService
  ) {
  }

  footer: any = "";
  customers: any[] = [];
  selectedCustomer: any
  selected: any;
  wilayas: any[] = []
  communes: any[] = []


  ngOnInit() {

    this.customerService.getAll().subscribe((res:any )=> {
      this.customers = res
    })

    this.decoupageService.getWilaya().subscribe((res:any) => {
      this.wilayas = res
      this.wilayas.push({wilayaCode: '0', wilayaName: "ETRANGER"})
    })

    let stagiaireId = this.activateRoute.snapshot.url[1]
    this.inscriptionId = this.activateRoute.snapshot.url[2]

    if (this.inscriptionId != 0) this.inscriptionService.getById(this.inscriptionId).subscribe(res => {
      this.inscription = res
    })

    this.stagiaireService.getById(stagiaireId).subscribe((res:any) => {
      this.selected = res
      this.selectedCustomer = res.customer
      let action = document.getElementById("action");
      if (action) action.setAttribute("value", this.selectedCustomer.shortName)

      let bp = res.birthPlace
      let wilayaName = bp.slice(bp.indexOf('.') + 1)
      this.decoupageService.getCommune(wilayaName).subscribe((res:any) => {
        this.communes = res
      })

      this.formGroup = this.fb.group({
        birthDay: [this.utils.formatDate(res.birthDay)],
        familyName: [res.familyName, Validators.required],
        firstName: [res.firstName, Validators.required],
        birthPlace: [res.birthPlace],
        sexe: [res.sexe],
        school: [res.scholeLvel],
        gsp: [res.gsp],
        adresse: [res.adresse],
        phoneNumber: [res.phoneNumber],
        mailAdresse: [res.mailAdresse],
        wilaya: [bp.slice(bp.indexOf('.') + 1)],
        commune: [bp.slice(0, bp.indexOf('-'))]
      })
    })


  }

  onValidate() {

    if (this.formGroup.valid && this.selectedCustomer) {
      let birthPlace = ""
      if (this.formGroup.value.wilaya == "ETRANGER") birthPlace = this.formGroup.value.birthPlace
      else birthPlace = this.formGroup.value.commune + "-W." + this.formGroup.value.wilaya

      this.stagiaireService.update({
        id: this.selected.id,
        firstName: this.formGroup.value.firstName,
        familyName: this.formGroup.value.familyName,
        birthDay: this.formGroup.value.birthDay,
        birthPlace: birthPlace,
        sexe: this.formGroup.value.sexe,
        schoolLevel:this.formGroup.value.school,
        gsp:this.formGroup.value.gsp,

        adresse: this.formGroup.value.adresse,
        phoneNumber: this.formGroup.value.phoneNumber,
        mailAdresse: this.formGroup.value.mailAdresse,
        customer: this.selectedCustomer


      }).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez remplir les champs requis ")


  }

  onCancel() {
    if (this.inscriptionId == 0) this.router.navigateByUrl("stagiaire")
    else this.router.navigateByUrl("inscription/" + this.inscription.session.id)

  }

  customerSelected(event: any) {


    const value = event.target.value;


    this.customers.forEach(u => {
      if (u.shortName == value) {
        this.selectedCustomer = u;
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
      this.closeResult = `Dismissed ${UpdateStagiaireComponent.getDismissReason(reason)}`;
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
    let wilayaName = this.formGroup.value.wilaya


    this.decoupageService.getCommune(wilayaName).subscribe((res:any) => {
      this.communes = res
    })
  }


}


