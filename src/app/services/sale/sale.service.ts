import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {invoice} from "@igniteui/material-icons-extended";

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private  httpClient: HttpClient) { }// permettre de comunuquer avec les API

  public getSaleByInvoice(invoice:any){
    let url=environment.backendBaseUrl+"/sale/byinvoice/"+invoice.id
    return this.httpClient.get<any>(url)
  }
  public  add (sale :any ){
    let url=environment.backendBaseUrl+"/sale/add"
    return this.httpClient.post(url,sale)

  }

  public delete(sale: any) {
    let url=environment.backendBaseUrl+"/sale/delete"
    return  this.httpClient.post(url,sale);

  }
  public  update(sale :any ){
    let url=environment.backendBaseUrl+"/sale/update"
    return this.httpClient.post(url,sale)


  }
}
