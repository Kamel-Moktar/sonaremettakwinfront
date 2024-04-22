import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CustomerComponent} from "./components/customer/customer.component";
import {AddCustomerComponent} from "./components/customer/add-customer/add-customer.component";
import {UpdateCustomerComponent} from "./components/customer/update-customer/update-customer/update-customer.component";
import {UniteMesureComponent} from "./components/unite-mesure/unite-mesure.component";
import {AddUniteMesureComponent} from "./components/unite-mesure/add-unite-mesure/add-unite-mesure.component";
import {UpdateUniteMesureComponent} from "./components/unite-mesure/update-unite-mesure/update-unite-mesure.component";
import {BenefitComponent} from "./components/benefit/benefit.component";
import {AddBenefitComponent} from "./components/benefit/add-benefit/add-benefit.component";
import {UpdateBenefitComponent} from "./components/benefit/update-benefit/update-benefit.component";
import {InvoiceComponent} from "./components/invoice/invoice.component";
import {AddInvoiceComponent} from "./components/invoice/add-invoice/add-invoice.component";

const routes: Routes = [
  {path:"customer", component:CustomerComponent},
  {path:"addcustomer",component:AddCustomerComponent},
  {path:"updatecustomer/:id/:name/:sname/:rc/:if/:ns/:narticle",component:UpdateCustomerComponent},
  { path:"unitemesure", component:UniteMesureComponent},
  { path:"addunitemesure", component:AddUniteMesureComponent},
  { path:"updateunitemesure/:id/:name", component:UpdateUniteMesureComponent},
  {path:"benefit", component:BenefitComponent},
  { path:"addbenefit", component:AddBenefitComponent},
  { path:"updatbenefit/:id/:designation/:description/:price/:sakina/:unitMeasurement", component:UpdateBenefitComponent},
  {path:"invoice",component:InvoiceComponent},
  { path:"addinvoice", component:AddInvoiceComponent},


  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
