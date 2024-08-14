import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../../../services/stagiaire/stagiaire.service";
import {CustomerService} from "../../../services/customer/customer.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DecoupageService} from "../../../services/decoupage/decoupage.service";
import {UtilsService} from "../../../services/utils/utils.service";
import {InscriptionService} from "../../../services/inscription/inscription.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-detail-stagiaire',
  templateUrl: './detail-stagiaire.component.html',
  styleUrls: ['./detail-stagiaire.component.css']
})
export class DetailStagiaireComponent {


  title: String = "Détail  stagiaire";
  historyFormation = true
  historyFacturation = true

  formGroup: FormGroup = this.fb.group({

    birthDay: ["", Validators.required],
    familyName: ["", Validators.required],
    firstName: ["", Validators.required],
    birthPlace: [""],
    adresse: [""],
    phoneNumber: [""],
    mailAdresse: [""],
    wilaya: [""],
    commune: [""]

  })

  fg: FormGroup = this.fb.group({
    name: [""],
    shortName: [""],


  })
  private closeResult = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private stagiaireService: StagiaireService,
    private customerService: CustomerService,
    private modalService: NgbModal,
    private decoupageService: DecoupageService,
    private activateRoute: ActivatedRoute,
    private utils: UtilsService,
    private inscriptionService: InscriptionService,
    private datePipe:DatePipe
  ) {
  }


  footer: any = "";
  customers: any[] = [];
  selectedCustomer: any
  selected: any;
  wilayas: any[] = []
  communes: any[] = []
  sessions: any[] = []


  ngOnInit() {


    this.customerService.getAll().subscribe(res => {
      this.customers = res
    })

    this.decoupageService.getWilaya().subscribe(res => {
      this.wilayas = res
      this.wilayas.push({wilayaCode: '0', wilayaName: "ETRANGER"})
    })

    let stagiaireId = this.activateRoute.snapshot.url[1]
    this.inscriptionService.getAllByStagiaire(stagiaireId).subscribe(res => {
      this.sessions = res
    })
    this.stagiaireService.getById(stagiaireId).subscribe(res => {
      this.selected = res
      this.selectedCustomer = res.customer
      let action = document.getElementById("action");
      if (action) action.setAttribute("value", this.selectedCustomer.shortName)

      let nom = document.getElementById("nom");
      if (nom) nom.setAttribute("value", res.familyName)
      let prenom = document.getElementById("prenom");
      if (prenom) prenom.setAttribute("value", res.firstName)
      let date = document.getElementById("date");
      if (date) date.setAttribute("value",<string>this.datePipe.transform(res.birthDay, 'dd/MM/yyyy') )

      let lieu = document.getElementById("lieu");

      if (lieu) lieu.setAttribute("value", res.birthPlace)
      let adresse = document.getElementById("adresse");
      if (adresse) adresse.setAttribute("value", res.adresse)
      let tph = document.getElementById("tph");
      if (tph) tph.setAttribute("value", res.phoneNumber)
      let mail = document.getElementById("mail");
      if (mail) mail.setAttribute("value", res.mailAdresse)
    })
  }


  onCancel() {
    this.router.navigateByUrl("stagiaire")
  }


  onSearch() {

    this.customerService.getAllParam({name: this.fg.value.name, shortName: this.fg.value.shortName}).subscribe(res => {
      this.customers = res

    })
  }


  onUpdate() {
    this.router.navigateByUrl("update-stagiaire/" + this.selected.id)
  }

  onStagiaire(a: any) {
    this.router.navigateByUrl("inscription/" + a.session.id)
  }

  onHistoryFormation() {
    this.historyFormation = !this.historyFormation
  }
  onHistoryFacturation() {
    this.historyFacturation = !this.historyFacturation
  }
}



