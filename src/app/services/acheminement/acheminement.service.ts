import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AcheminementService {

  baseUrl: any = environment.backendBaseUrl + "/shippingslip"


  constructor(private http: HttpClient) {
  }

  public getAll() {
    let url = this.baseUrl + "/all"
    return this.http.get<any>(url)
  }

  public getInvoiceByShippingSlip(shippingSlipId: any) {
    let url = this.baseUrl + "/invoicebyshippingslip/"+shippingSlipId
    return this.http.get<any>(url)
  }

  public getByShippingSlipInvoiceById(shippingSlipInvoiceId: any) {
    let url = this.baseUrl + "/shippingslipinvoicebyid/"+shippingSlipInvoiceId
    return this.http.get<any>(url)
  }

  public add(shippingSlip: any) {
    let url = this.baseUrl + "/add"
    return this.http.post(url, shippingSlip)

  }

  public delete(shippingSlip: any) {
    let url = this.baseUrl + "/delete"
    return this.http.post<any>(url, shippingSlip)
  }

  public update(shippingSlip: any) {
    let url = this.baseUrl + "/update"
    return this.http.post(url, shippingSlip)
  }


  getShippingSlipById(shippingSlipId: any) {
    let url = this.baseUrl + "/byid/" + shippingSlipId
    return this.http.get<any>(url)

  }
  accuse(shippingSlip: any) {
    let url = this.baseUrl + "/accuse"
    return this.http.post<any>(url,shippingSlip)

  }

 public  addInvoice(shppingSlipInvoice:any){
    let url = this.baseUrl + "/addinvoice"

    return this.http.post<any>(url,shppingSlipInvoice)


  }
 public  formatShippingSlipNumber(shippingSlip: any) :any{

    let shippingSlipNmber = ""
    let datePipe = new DatePipe("EN-en")
    let year = datePipe.transform(shippingSlip.date, "yyyy")
    if (shippingSlip.number < 10) return "000" + shippingSlip.number + "/" + year
    if (shippingSlip.number < 100) return "00" + shippingSlip.number + "/" + year
    if (shippingSlip.number < 1000) return "0" + shippingSlip.number + "/" + year
    return shippingSlip.number + "/" + year

  }


 public  deleteInvoice(invoice: any,shippingSlipId: any) {
    let url = this.baseUrl + "/deleteinvoice"
    return this.http.post<any>(url,invoice)
  }

  updateShippingSlipDetail (shippingSlipInvoice: any) {
  let url = this.baseUrl + "/updateinvoice"
  return this.http.post(url, shippingSlipInvoice)
}
}
