import {NgModule} from '@angular/core';
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
import { EncasementComponent } from './components/encasement/encasement.component';
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





function NgbModule() {

}

@NgModule({
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
      EncasementComponent,
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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPrintModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
