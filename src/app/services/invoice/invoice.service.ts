import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private http:HttpClient) { }


  public getAll(){
    let url=environment.backendBaseUrl+"/invoice/all"
    return this.http.get<any>(url)
  }

  public  add (invoice :any ){
    let url=environment.backendBaseUrl+"/invoice/add"
    return this.http.post(url,invoice)

  }

  public  delete(invoice :any ){
    let url=environment.backendBaseUrl+"/invoice/delete"
    return this.http.post(url,invoice)
  }

  public  update(invoice :any ){
    let url=environment.backendBaseUrl+"/invoice/update"
    return this.http.post(url,invoice)
  }


  getInvoiceById(invoiceId: any) {
    let url=environment.backendBaseUrl+"/invoice/byid/"+invoiceId
    return this.http.get<any>(url)

  }

  formatInvoiceNumber(invoice :any ){
    let invoiceNmber=""
    let datePipe=new DatePipe("EN-en")
    let year=datePipe.transform(invoice.date,"yyyy")
    if(invoice.number<10)return "000"+invoice.number+"/"+year
    if(invoice.number<100)return "00"+invoice.number+"/"+year
    if(invoice.number<1000)return "0"+invoice.number+"/"+year
    if(invoice.number<10000)return invoice.number+"/"+year

    return "0"
  }
}
