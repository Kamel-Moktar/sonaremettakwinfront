import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HttpClientModule } from "@angular/common/http";
import { AddCustomerComponent } from "./components/customer/add-customer/add-customer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UpdateCustomerComponent } from './components/customer/update-customer/update-customer.component';
import { UniteMesureComponent } from './components/unite-mesure/unite-mesure.component';
import { AddUniteMesureComponent } from './components/unite-mesure/add-unite-mesure/add-unite-mesure.component';
import { UpdateUniteMesureComponent } from './components/unite-mesure/update-unite-mesure/update-unite-mesure.component';
import { BenefitComponent } from './components/benefit/benefit.component';
import { AddBenefitComponent } from './components/benefit/add-benefit/add-benefit.component';
import { UpdateBenefitComponent } from './components/benefit/update-benefit/update-benefit.component';

import { InvoiceComponent } from './components/invoice/invoice.component';

import { AddInvoiceComponent } from './components/invoice/add-invoice/add-invoice.component';
import { PrintInvoiceComponent } from './components/invoice/print-invoice/print-invoice.component';
import { InvoiceDetailComponent } from './components/invoice/invoice-detail/invoice-detail.component';
import { AddSaleComponent } from './components/invoice/add-sale/add-sale.component';
import { UpdateSaleComponent } from './components/invoice/update-sale/update-sale.component';



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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
