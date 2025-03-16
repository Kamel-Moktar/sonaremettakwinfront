import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CustomerComponent} from "./components/customer/customer.component";
import {AddCustomerComponent} from "./components/customer/add-customer/add-customer.component";
import {UpdateCustomerComponent} from "./components/customer/update-customer/update-customer.component";
import {UniteMesureComponent} from "./components/unite-mesure/unite-mesure.component";
import {AddUniteMesureComponent} from "./components/unite-mesure/add-unite-mesure/add-unite-mesure.component";
import {UpdateUniteMesureComponent} from "./components/unite-mesure/update-unite-mesure/update-unite-mesure.component";
import {BenefitComponent} from "./components/benefit/benefit.component";
import {AddBenefitComponent} from "./components/benefit/add-benefit/add-benefit.component";
import {UpdateBenefitComponent} from "./components/benefit/update-benefit/update-benefit.component";
import {InvoiceComponent} from "./components/invoice/invoice.component";
import {AddInvoiceComponent} from "./components/invoice/add-invoice/add-invoice.component";
import {InvoiceDetailComponent} from "./components/invoice/invoice-detail/invoice-detail.component";
import {AddSaleComponent} from "./components/invoice/add-sale/add-sale.component";
import {UpdateSaleComponent} from "./components/invoice/update-sale/update-sale.component";
import {PrintInvoiceComponent} from "./components/invoice/print-invoice/print-invoice.component";
import {AcheminementComponent} from "./components/acheminement/acheminement.component";
import {AddAcheminementComponent} from "./components/acheminement/add-acheminement/add-acheminement.component";
import {AccuseAcheminementComponent} from "./components/acheminement/accuse-acheminement/accuse-acheminement.component";
import {DetailAcheminementComponent} from "./components/acheminement/detail-acheminement/detail-acheminement.component";
import {UpdateDetailAceminementComponent} from "./components/acheminement/update-detail-aceminement/update-detail-aceminement.component";
import {UpdateInvoiceComponent} from "./components/invoice/update-invoice/update-invoice.component";
import {PrintAcheminementComponent} from "./components/acheminement/print-acheminement/print-acheminement.component";
import {PaymentComponent} from "./components/payment/payment.component";
import {AddPaymentComponent} from "./components/payment/add-payment/add-payment.component";
import {UpdatePaymentComponent} from "./components/payment/update-payment/update-payment.component";
import {EncaissementComponent} from "./components/encaissement/encaissement.component";

import {PrintPaymentComponent} from "./components/payment/print-payment/print-payment.component";
import {TurnoverComponent} from "./components/turnover/turnover.component";
import {DebtsComponent} from "./components/debts/debts.component";

import {PrintAttestationComponent} from "./components/pedagogie/attestation/print-attestation/print-attestation.component";
import {ProformaComponent} from "./components/proforma/proforma.component";
import {AddProformaComponent} from "./components/proforma/add-proforma/add-proforma.component";
import {UpdateProformaComponent} from "./components/proforma/update-proforma/update-proforma.component";
import {ProformaDetailComponent} from "./components/proforma/proforma-detail/proforma-detail.component";
import {AddOffreComponent} from "./components/proforma/add-offre/add-offre.component";
import {UpdateOffreComponent} from "./components/proforma/update-offre/update-offre.component";
import {PrintProformaComponent} from "./components/proforma/print-proforma/print-proforma.component";
import {ActionComponent} from "./components/action/action.component";
import {AddActionComponent} from "./components/action/add-action/add-action.component";
import {UpdateActionComponent} from "./components/action/update-action/update-action.component";
import {SessionComponent} from "./components/session/session.component";
import {AddSessionComponent} from "./components/session/add-session/add-session.component";
import {UpdateSessionComponent} from "./components/session/update-session/update-session.component";
import {PhaseComponent} from "./components/phase/phase.component";
import {AddPhaseComponent} from "./components/phase/add-phase/add-phase.component";
import {UpdatePhaseComponent} from "./components/phase/update-phase/update-phase.component";
import {StagiaireComponent} from "./components/stagiaire/stagiaire.component";
import {AddStagiaireComponent} from "./components/stagiaire/add-stagiaire/add-stagiaire.component";
import {UpdateStagiaireComponent} from "./components/stagiaire/update-stagiaire/update-stagiaire.component";
import {UpdateDomaineComponent} from "./components/domaine/update-domaine/update-domaine.component";
import {AddDomaineComponent} from "./components/domaine/add-domaine/add-domaine.component";
import {DomaineComponent} from "./components/domaine/domaine.component";
import {DetailStagiaireComponent} from "./components/stagiaire/detail-stagiaire/detail-stagiaire.component";
import {InscriptionComponent} from "./components/inscription/inscription.component";
import {DeclencheurComponent} from "./components/inscription/declencheur/declencheur.component";
import {UpdateAraveDateComponent} from "./components/inscription/update-arave-date/update-arave-date.component";
import {PrintListStagiaireComponent} from "./components/inscription/print-list-stagiaire/print-list-stagiaire.component";
import {HotelComponent} from "./components/hotel/hotel.component";
import {AddHotelComponent} from "./components/hotel/add-hotel/add-hotel.component";
import {ReservationComponent} from "./components/reservation/reservation.component";
import {DetailReservationComponent} from "./components/reservation/detail-reservation/detail-reservation.component";
import {UpdateReservationComponent} from "./components/reservation/update-reservation/update-reservation.component";
import {UpdateHotelComponent} from "./components/hotel/update-hotel/update-hotel.component";
import {SearchStgaireComponent} from "./components/search-stgaire/search-stgaire.component";
import {ChronogrammeComponent} from "./components/chronogramme/chronogramme.component";
import {ModuleComponent} from "./components/module/module.component";
import {AddModuleComponent} from "./components/module/add-module/add-module.component";
import {UpdateModuleComponent} from "./components/module/update-module/update-module.component";
import {FormationDispositifComponent} from "./components/action/formation-dispositif/formation-dispositif.component";
import {RealisationDispositifComponent} from "./components/phase/realisation-dispositif/realisation-dispositif.component";
import {AttachementComponent} from "./components/invoice/attachement/attachement.component";
import {UpdatePriceComponent} from "./components/price/update-price/update-price.component";
import {AddPriceComponent} from "./components/price/add-price/add-price.component";
import {PriceComponent} from "./components/price/price.component";
import {UpdateInvoiceDetailComponent} from "./components/invoice-detail/update-invoice-detail/update-invoice-detail.component";
import {AddInvoiceDetailComponent} from "./components/invoice-detail/add-invoice-detail/add-invoice-detail.component";
import {PrintAttachementComponent} from "./components/invoice/print-attachement/print-attachement.component";
import {AddUserComponent} from "./components/security/user/add-user/add-user.component";
import {UpdateUserComponent} from "./components/security/user/update-user/update-user.component";
import {UserComponent} from "./components/security/user/user.component";

import {ChangPswComponent} from "./components/security/user/chang-psw/chang-psw.component";
import {AddRoleComponent} from "./components/security/role/add-role/add-role.component";
import {UpdateRoleComponent} from "./components/security/role/update-role/update-role.component";
import {RoleComponent} from "./components/security/role/role.component";
import {SecurityService} from "./services/security/security.service";
import {PrintAllAttestationsComponent} from "./components/pedagogie/attestation/print-all-attestations/print-all-attestations.component";

const routes: Routes = [
  {path: "customer", component: CustomerComponent},
  {path: "addcustomer", component: AddCustomerComponent},
  {path: "updatecustomer/:id", component: UpdateCustomerComponent},
  {path: "unitemesure", component: UniteMesureComponent},
  {path: "addunitemesure", component: AddUniteMesureComponent},
  {path: "updateunitemesure/:id", component: UpdateUniteMesureComponent},
  {path: "benefit", component: BenefitComponent},
  {path: "addbenefit", component: AddBenefitComponent},
  {path: "updatbenefit/:id", component: UpdateBenefitComponent},
  {path: "invoice", component: InvoiceComponent},
  {path: "addinvoice", component: AddInvoiceComponent},
  {path: "updateinvoice/:id", component: UpdateInvoiceComponent},
  {path: "invoice-detail/:invoiceId", component: InvoiceDetailComponent},
  {path: "add-sale/:invoiceId", component: AddSaleComponent},
  {path: "update-sale/:invoiceId", component: UpdateSaleComponent},

  {path: "acheminement", component: AcheminementComponent},
  {path: "add-acheminement", component: AddAcheminementComponent},
  {path: "accuse-acheminement/:shippingSlipId", component: AccuseAcheminementComponent},
  {path: "detail-acheminement/:shippingSlipId", component: DetailAcheminementComponent},
  {path: "update-detail-acheminement/:shippingSlipId", component: UpdateDetailAceminementComponent},
  {path: "print-shippingslip/:id", component: PrintAcheminementComponent},
  {path: "payment", component: PaymentComponent},
  {path: "addpayment", component: AddPaymentComponent},
  {path: "update-payment/:di", component: UpdatePaymentComponent},
  {path: "encaissement/:id", component: EncaissementComponent},
  {path: "print-payment", component: PrintPaymentComponent},
  {path: "turnover", component: TurnoverComponent},
  {path: "debts", component: DebtsComponent},

  {path: 'print-invoice/:invoiceIds', component: PrintInvoiceComponent},
  {path: 'attestation/:inscriptionId', component: PrintAttestationComponent},

  {path:'proforma' , component:  ProformaComponent},
  {path: 'add-proforma', component: AddProformaComponent},
  {path: 'update-proforma/:proformaId',component:UpdateProformaComponent},
  {path: "proforma-detail/:proformaId", component: ProformaDetailComponent},
  {path: "add-offre/:proforma-id", component: AddOffreComponent},
  {path: "update-offre/:proformaId", component: UpdateOffreComponent},
  {path: 'print-proforma/:proformaIds', component: PrintProformaComponent},

  {path:'action' , component:  ActionComponent},
  {path: 'add-action', component: AddActionComponent},
  {path: 'update-action/:actionId',component:UpdateActionComponent},

  {path:'session' , component:  SessionComponent},
  {path: 'add-session', component: AddSessionComponent},
  {path: 'update-session/:session-id',component:UpdateSessionComponent},



  {path:'phase/:session_id' , component:  PhaseComponent},
  {path: 'add-phase/:sessionId', component: AddPhaseComponent},
  {path: 'update-phase/:phaseId',component:UpdatePhaseComponent},

  {path:'stagiaire' , component:  StagiaireComponent},
  {path: 'add-stagiaire/:form', component: AddStagiaireComponent},
  {path: 'update-stagiaire/:stagiaireId/:inscriptionID',component:UpdateStagiaireComponent},
  {path: 'detail-stagiaire/:stagiaireId/:mode',component:DetailStagiaireComponent},

  {path:'domaine' , component:  DomaineComponent},
  {path: 'add-domaine', component: AddDomaineComponent},
  {path: 'update-domaine/:domainId',component:UpdateDomaineComponent},

  {path: 'inscription/:sessionId' , component:  InscriptionComponent},
  {path: 'update-inscription/:inscriptionId', component: UpdateInvoiceComponent},
  {path: 'declencheur/:inscriptionId', component:DeclencheurComponent},
  {path: 'update-arrive-date/:inscriptionId', component:UpdateAraveDateComponent},
  {path: 'printlist/:sessionId', component:PrintListStagiaireComponent},


  {path:'hotel',component:HotelComponent},
  {path:'add-hotel',component:AddHotelComponent},
  {path:'update-hotel/:hotelId',component:UpdateHotelComponent},

  {path:'reservation/:id',component:ReservationComponent},
  {path:'detail-reservation/:inscriptionId',component:DetailReservationComponent},
  {path:'update-reservation/:reservationId',component:UpdateReservationComponent},

  {path:'search-stagiaire',component:SearchStgaireComponent},

  {path:'chronogramme',component:ChronogrammeComponent},


  {path:'module',component:ModuleComponent},
  {path:'add-module',component:AddModuleComponent},
  {path:'update-module/:id',component:UpdateModuleComponent},

  {path:'formation-dispositif/:id',component:FormationDispositifComponent},
  {path:'realisation-dispositif/:id',component:RealisationDispositifComponent},


  {path:'attachement/:id',component:AttachementComponent},
  {path:'update-invoice-detail/:id',component:UpdateInvoiceDetailComponent},
  {path:'add-invoice-detail/:id/:id1',component:AddInvoiceDetailComponent},
  {path:'print-attachement/:id',component:PrintAttachementComponent},

  {path:'add-price',component:AddPriceComponent},
  {path:'update-price/:id',component:UpdatePriceComponent},
  {path:'price',component:PriceComponent},


  {path:'add-user',component:AddUserComponent},
  {path:'update-user/:id',component:UpdateUserComponent},
  {path:'user',component:UserComponent},

  {path:'change-psw/:id',component:ChangPswComponent},

  {path:'add-role',component:AddRoleComponent},
  {path:'update-role/:id',component:UpdateRoleComponent},
  {path:'role',component:RoleComponent},

  {path:'attestations/:id',component:PrintAllAttestationsComponent},
]








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor( private securityService: SecurityService) {

    // console.log("قققققققققققققققققققققققققققققققققققققققق")

    // this.securityService.getCurrentUser(this.formGroup.value.name).subscribe(
    //   (res: any) => {
    //
    //     this.currentUser = res
    //
    //     this.contextualiser(res)
    //     this.login = true
    //   }, (error) => {
    //     alert("Session expirée  ")
    //     this.login = false
    //   })




  }
}
