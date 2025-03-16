import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {SecurityService} from "./services/security/security.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TASYIR';
  login = false;
  formGroup: FormGroup = this.fb.group({
    name: ["", Validators.required],
    psw: ["", Validators.required],


  })

  currentUser: any;


  offre = false
  commercial = false
  ingenierie = false
  suivi = false
  logistique = false
  administrateur = false

  initRoles() {
    this.offre = false
    this.commercial = false
    this.ingenierie = false
    this.suivi = false
    this.logistique = false
    this.administrateur = false
  }


  constructor(private router: Router, private securityService: SecurityService, private fb: FormBuilder) {
    let token = this.securityService.loadToken()
    let currentUserId = this.securityService.loadCurentUserId()
    console.log(currentUserId)
    if (currentUserId){
      this.securityService.getUserById(currentUserId).subscribe(
        (res: any) => {
          this.currentUser = res
          if (res) this.contextualiser(res)
          this.login = true
        })}

  }

  // ngOnInit() {
  //
  //   let token = this.securityService.loadToken()
  //
  //   this.securityService.getCurrentUser(this.formGroup.value.name).subscribe(
  //     (res: any) => {
  //
  //       this.currentUser = res
  //
  //       this.contextualiser(res)
  //       this.login = true
  //     }, (error) => {
  //       alert("Session expirée  ")
  //       this.login = false
  //     })
  //
  //
  // }


  onCustomerCalled() {

    this.router.navigateByUrl("customer");
  }

  onUniteMesureClic() {
    this.router.navigateByUrl("unitemesure");//afficher le compenent das la zone dynamyque
  }

  onPrestationCalled() {
    this.router.navigateByUrl("benefit")
  }

  onInvoiceCalled() {
    this.router.navigateByUrl("invoice")
  }

  oncAcheminement() {
    this.router.navigateByUrl("acheminement")
  }

  onReglement() {
    this.router.navigateByUrl("payment")
  }

  onCA() {
    this.router.navigateByUrl("turnover")
  }

  oncCreance() {
    this.router.navigateByUrl("debts")
  }

  onEncaissement() {

  }

  onProForma() {
    this.router.navigateByUrl("proforma")
  }

  onAttestationCalled() {
    this.router.navigateByUrl("attestation")
  }

  onInsciptionCalled() {
    this.router.navigateByUrl("inscription/0")
  }

  onActionCalled() {
    this.router.navigateByUrl("action")
  }

  onSessionClic() {
    this.router.navigateByUrl("session")
  }

  onPhaseCalled() {
    this.router.navigateByUrl("phase/0")
  }

  onDomaineCalled() {
    this.router.navigateByUrl("domaine")
  }

  onStagiaireCalled() {
    this.router.navigateByUrl("stagiaire")
  }

  onHotelCalled() {
    this.router.navigateByUrl("hotel")
  }

  onReservatioCalled() {
    this.router.navigateByUrl("reservation/0")
  }

  onSearchStagiaire() {
    this.router.navigateByUrl("search-stagiaire")
  }

  onChronogramme() {
    this.router.navigateByUrl("chronogramme")
  }

  onModuleCalled() {
    this.router.navigateByUrl("module")
  }

  onPrice() {
    this.router.navigateByUrl("price")
  }

  onUserCalled() {
    this.router.navigateByUrl("user")
  }

  onValidate() {
    this.securityService.clearToken();
    this.securityService.login({username: this.formGroup.value.name, password: this.formGroup.value.psw}).subscribe(
      (respense: any) => {
        if (this.securityService.loadToken()) {
          this.securityService.getCurrentUser(this.formGroup.value.name).subscribe(
            (res: any) => {
              this.currentUser = res
              this.contextualiser(res)
              this.login = true
            })
        } else alert("Non d'utilisateur ou mot de passe incorrect ")
      })
  }

  contextualiser(res: any) {

    this.initRoles()

    if (res.roles[0].role == "Commercial") this.commercial = true
    if (res.roles[0].role == "Offre") this.offre = true
    if (res.roles[0].role == "Administrateur") this.administrateur = true
    if (res.roles[0].role == "Ingenerie") this.ingenierie = true
    if (res.roles[0].role == "Suivie") this.suivi = true
    if (res.roles[0].role == "Logistique") this.logistique = true
  }

  logout() {
    this.securityService.logout();
    this.login = false
  }

  onchangePsw() {

    this.router.navigateByUrl("change-psw/" + this.currentUser.id)
  }
}
