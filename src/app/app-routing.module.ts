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
import {EncasementComponent} from "./components/encasement/encasement.component";
import {PrintAttestationComponent} from "./components/pedagogie/attestation/print-attestation/print-attestation.component";
import {ProformaComponent} from "./components/proforma/proforma.component";
import {AddProformaComponent} from "./components/proforma/add-proforma/add-proforma.component";
import {UpdateProformaComponent} from "./components/proforma/update-proforma/update-proforma.component";
import {ProformaDetailComponent} from "./components/proforma/proforma-detail/proforma-detail.component";
import {AddOffreComponent} from "./components/proforma/add-offre/add-offre.component";
import {UpdateOffreComponent} from "./components/proforma/update-offre/update-offre.component";
import {PrintProformaComponent} from "./components/proforma/print-proforma/print-proforma.component";

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
  {path: "invoice-detail/:invoice-id", component: InvoiceDetailComponent},
  {path: "add-sale/:invoice-id", component: AddSaleComponent},
  {path: "update-sale/:invoice-id", component: UpdateSaleComponent},

  {path: "acheminement", component: AcheminementComponent},
  {path: "add-acheminement", component: AddAcheminementComponent},
  {path: "accuse-acheminement/:shippingSlip-id", component: AccuseAcheminementComponent},
  {path: "detail-acheminement/:shippingSlip-id", component: DetailAcheminementComponent},
  {path: "update-detail-acheminement/:shippingSlip-id", component: UpdateDetailAceminementComponent},
  {path: "print-shippingslip/:id", component: PrintAcheminementComponent},
  {path: "payment", component: PaymentComponent},
  {path: "addpayment", component: AddPaymentComponent},
  {path: "update-payment/:di", component: UpdatePaymentComponent},
  {path: "encaissement/:id", component: EncaissementComponent},
  {path: "print-payment/:id", component: PrintPaymentComponent},
  {path: "turnover", component: TurnoverComponent},
  {path: "debts", component: DebtsComponent},
  {path: "encasement", component: EncasementComponent},
  {path: 'print-invoice/:invoiceIds', component: PrintInvoiceComponent},
  {path: 'attestation', component: PrintAttestationComponent},

  {path:'proforma' , component:  ProformaComponent},
  {path: 'add-proforma', component: AddProformaComponent},
  {path: 'update-proforma/:proforma-id',component:UpdateProformaComponent},
  {path: "proforma-detail/:proforma-id", component: ProformaDetailComponent},
  {path: "add-offre/:proforma-id", component: AddOffreComponent},
  {path: "update-offre/:proforma-id", component: UpdateOffreComponent},
  {path: 'print-proforma/:proformaIds', component: PrintProformaComponent}

  ]








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
