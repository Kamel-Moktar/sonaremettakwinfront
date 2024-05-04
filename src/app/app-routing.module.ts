import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {path:"customer", component:CustomerComponent},
  {path:"addcustomer",component:AddCustomerComponent},
  {path:"updatecustomer/:id",component:UpdateCustomerComponent},
  { path:"unitemesure", component:UniteMesureComponent},
  { path:"addunitemesure", component:AddUniteMesureComponent},
  { path:"updateunitemesure/:id", component:UpdateUniteMesureComponent},
  {path:"benefit", component:BenefitComponent},
  { path:"addbenefit", component:AddBenefitComponent},
  { path:"updatbenefit/:id", component:UpdateBenefitComponent},
  {path:"invoice",component:InvoiceComponent},
  { path:"addinvoice", component:AddInvoiceComponent},
  { path:"invoice-detail/:invoice-id", component:InvoiceDetailComponent},
  { path:"add-sale/:invoice-id", component:AddSaleComponent},
  { path:"update-sale/:invoice-id", component:UpdateSaleComponent},


  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
