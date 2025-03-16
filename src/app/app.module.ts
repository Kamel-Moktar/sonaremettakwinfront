import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerComponent} from './components/customer/customer.component';
import {HttpClientModule} from "@angular/common/http";
import {AddCustomerComponent} from "./components/customer/add-customer/add-customer.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UpdateCustomerComponent} from './components/customer/update-customer/update-customer.component';
import {UniteMesureComponent} from './components/unite-mesure/unite-mesure.component';
import {AddUniteMesureComponent} from './components/unite-mesure/add-unite-mesure/add-unite-mesure.component';
import {UpdateUniteMesureComponent} from './components/unite-mesure/update-unite-mesure/update-unite-mesure.component';
import {BenefitComponent} from './components/benefit/benefit.component';
import {AddBenefitComponent} from './components/benefit/add-benefit/add-benefit.component';
import {UpdateBenefitComponent} from './components/benefit/update-benefit/update-benefit.component';
import {InvoiceComponent} from './components/invoice/invoice.component';
import {AddInvoiceComponent} from './components/invoice/add-invoice/add-invoice.component';
import {PrintInvoiceComponent} from './components/invoice/print-invoice/print-invoice.component';
import {InvoiceDetailComponent} from './components/invoice/invoice-detail/invoice-detail.component';
import {AddSaleComponent} from './components/invoice/add-sale/add-sale.component';
import {UpdateSaleComponent} from './components/invoice/update-sale/update-sale.component';
import {AcheminementComponent} from './components/acheminement/acheminement.component';
import {AddAcheminementComponent} from './components/acheminement/add-acheminement/add-acheminement.component';
import {AccuseAcheminementComponent} from './components/acheminement/accuse-acheminement/accuse-acheminement.component';
import {DetailAcheminementComponent} from './components/acheminement/detail-acheminement/detail-acheminement.component';
import {UpdateDetailAceminementComponent} from './components/acheminement/update-detail-aceminement/update-detail-aceminement.component';
import {UpdateInvoiceComponent} from "./components/invoice/update-invoice/update-invoice.component";
import { PrintAcheminementComponent } from './components/acheminement/print-acheminement/print-acheminement.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AddPaymentComponent } from './components/payment/add-payment/add-payment.component';
import { UpdatePaymentComponent } from './components/payment/update-payment/update-payment.component';
import { EncaissementComponent } from './components/encaissement/encaissement.component';

import { PrintPaymentComponent } from './components/payment/print-payment/print-payment.component';
import { TurnoverComponent } from './components/turnover/turnover.component';
import { DebtsComponent } from './components/debts/debts.component';

import {NgxPrintModule} from "ngx-print";
import { PrintAttestationComponent } from './components/pedagogie/attestation/print-attestation/print-attestation.component';
import { ProformaComponent } from './components/proforma/proforma.component';
import { AddProformaComponent } from './components/proforma/add-proforma/add-proforma.component';
import { UpdateProformaComponent } from './components/proforma/update-proforma/update-proforma.component';
import { ProformaDetailComponent } from './components/proforma/proforma-detail/proforma-detail.component';
import { UpdateOffreComponent } from './components/proforma/update-offre/update-offre.component';
import { AddOffreComponent } from './components/proforma/add-offre/add-offre.component';
import { PrintProformaComponent } from './components/proforma/print-proforma/print-proforma.component';
import { ActionComponent } from './components/action/action.component';
import { AddActionComponent } from './components/action/add-action/add-action.component';
import { UpdateActionComponent } from './components/action/update-action/update-action.component';
import { SessionComponent } from './components/session/session.component';
import { AddSessionComponent } from './components/session/add-session/add-session.component';
import { UpdateSessionComponent } from './components/session/update-session/update-session.component';
import { PhaseComponent } from './components/phase/phase.component';
import { AddPhaseComponent } from './components/phase/add-phase/add-phase.component';
import { UpdatePhaseComponent } from './components/phase/update-phase/update-phase.component';
import { StagiaireComponent } from './components/stagiaire/stagiaire.component';
import { AddStagiaireComponent } from './components/stagiaire/add-stagiaire/add-stagiaire.component';
import { UpdateStagiaireComponent } from './components/stagiaire/update-stagiaire/update-stagiaire.component';
import { DomaineComponent } from './components/domaine/domaine.component';
import { AddDomaineComponent } from './components/domaine/add-domaine/add-domaine.component';
import { UpdateDomaineComponent } from './components/domaine/update-domaine/update-domaine.component';
import {DatePipe} from "@angular/common";
import { DetailStagiaireComponent } from './components/stagiaire/detail-stagiaire/detail-stagiaire.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { UpdateInscriptionComponent } from './components/inscription/update-inscription/update-inscription.component';
import { DeclencheurComponent } from './components/inscription/declencheur/declencheur.component';
import { UpdateAraveDateComponent } from './components/inscription/update-arave-date/update-arave-date.component';
import { PrintListStagiaireComponent } from './components/inscription/print-list-stagiaire/print-list-stagiaire.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { AddHotelComponent } from './components/hotel/add-hotel/add-hotel.component';
import { UpdateHotelComponent } from './components/hotel/update-hotel/update-hotel.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { DetailReservationComponent } from './components/reservation/detail-reservation/detail-reservation.component';
import { UpdateReservationComponent } from './components/reservation/update-reservation/update-reservation.component';
import { SearchStgaireComponent } from './components/search-stgaire/search-stgaire.component';
import { HeaderComponent } from './components/print/header/header.component';
import { ChronogrammeComponent } from './components/chronogramme/chronogramme.component';
import { ModuleComponent } from './components/module/module.component';
import { AddModuleComponent } from './components/module/add-module/add-module.component';
import { UpdateModuleComponent } from './components/module/update-module/update-module.component';
import { FormationDispositifComponent } from './components/action/formation-dispositif/formation-dispositif.component';
import { RealisationDispositifComponent } from './components/phase/realisation-dispositif/realisation-dispositif.component';
import { AttachementComponent } from './components/invoice/attachement/attachement.component';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import { PriceComponent } from './components/price/price.component';
import { AddPriceComponent } from './components/price/add-price/add-price.component';
import { UpdatePriceComponent } from './components/price/update-price/update-price.component';
import { AddInvoiceDetailComponent } from './components/invoice-detail/add-invoice-detail/add-invoice-detail.component';
import { UpdateInvoiceDetailComponent } from './components/invoice-detail/update-invoice-detail/update-invoice-detail.component';
import { PrintAttachementComponent } from './components/invoice/print-attachement/print-attachement.component';

import { UserComponent } from './components/security/user/user.component';
import { AddUserComponent } from './components/security/user/add-user/add-user.component';
import { UpdateUserComponent } from './components/security/user/update-user/update-user.component';
import { ChangPswComponent } from './components/security/user/chang-psw/chang-psw.component';

import { RoleComponent } from './components/security/role/role.component';
import { AddRoleComponent } from './components/security/role/add-role/add-role.component';
import { UpdateRoleComponent } from './components/security/role/update-role/update-role.component';
import { PrintAllAttestationsComponent } from './components/pedagogie/attestation/print-all-attestations/print-all-attestations.component';
import { AttestationComponent } from './components/pedagogie/attestation/attestation/attestation.component';





function NgbModule() {

}

@NgModule( {
  declarations: [
    AppComponent,
    CustomerComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    UniteMesureComponent,
    AddUniteMesureComponent,
    UpdateUniteMesureComponent,
    BenefitComponent,
    AddBenefitComponent,
    UpdateBenefitComponent,
    InvoiceComponent,

    AddInvoiceComponent,
    PrintInvoiceComponent,
    InvoiceDetailComponent,
    AddSaleComponent,
    UpdateSaleComponent,
    AcheminementComponent,
    AddAcheminementComponent,
    AccuseAcheminementComponent,
    DetailAcheminementComponent,
    UpdateDetailAceminementComponent,
    UpdateInvoiceComponent,
    PrintAcheminementComponent,
    PaymentComponent,
    AddPaymentComponent,
    UpdatePaymentComponent,
    EncaissementComponent,
    PrintPaymentComponent,
      TurnoverComponent,
      DebtsComponent,
      PrintAttestationComponent,
      ProformaComponent,
      AddProformaComponent,
      UpdateProformaComponent,
      ProformaDetailComponent,
      UpdateOffreComponent,
      AddOffreComponent,
      PrintProformaComponent,
      ActionComponent,
      AddActionComponent,
      UpdateActionComponent,
      SessionComponent,
      AddSessionComponent,
      UpdateSessionComponent,
      PhaseComponent,
      AddPhaseComponent,
      UpdatePhaseComponent,
      StagiaireComponent,
      AddStagiaireComponent,
      UpdateStagiaireComponent,
      DomaineComponent,
      AddDomaineComponent,
      UpdateDomaineComponent,
      DetailStagiaireComponent,
      InscriptionComponent,
      UpdateInscriptionComponent,
      DeclencheurComponent,
      UpdateAraveDateComponent,
      PrintListStagiaireComponent,
      HotelComponent,
      AddHotelComponent,
      UpdateHotelComponent,
      ReservationComponent,
      DetailReservationComponent,
      UpdateReservationComponent,
      SearchStgaireComponent,
      HeaderComponent,
      ChronogrammeComponent,
      ModuleComponent,
      AddModuleComponent,
      UpdateModuleComponent,
      FormationDispositifComponent,
      RealisationDispositifComponent,
      AttachementComponent,
      PriceComponent,
      AddPriceComponent,
      UpdatePriceComponent,
      AddInvoiceDetailComponent,
      UpdateInvoiceDetailComponent,
      PrintAttachementComponent,

      UserComponent,
      AddUserComponent,
      UpdateUserComponent,
      ChangPswComponent,

      RoleComponent,
      AddRoleComponent,
      UpdateRoleComponent,
      PrintAllAttestationsComponent,
      AttestationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPrintModule,

    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {

  }
}

