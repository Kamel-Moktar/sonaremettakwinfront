import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class AcheminementService {

  baseUrl: any = environment.backendBaseUrl + "/shippingslip"
  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }

  constructor(private http: HttpClient,private securityService :SecurityService) {
  }

  public getAll() {
    let url = this.baseUrl + "/all"
    return this.http.get<any>(url,this.option)
  }

  public getInvoiceByShippingSlip(shippingSlipId: any) {
    let url = this.baseUrl + "/invoicebyshippingslip/" + shippingSlipId
    return this.http.get<any>(url,this.option)
  }

  public getByShippingSlipInvoiceById(shippingSlipInvoiceId: any) {
    let url = this.baseUrl + "/shippingslipinvoicebyid/" + shippingSlipInvoiceId
    return this.http.get<any>(url,this.option)
  }

  public add(shippingSlip: any) {
    let url = this.baseUrl + "/add"
    return this.http.post(url, shippingSlip,this.option)

  }

  public delete(shippingSlip: any) {
    let url = this.baseUrl + "/"+shippingSlip.id
    return this.http.delete <any>(url,this.option)
  }

  public update(shippingSlip: any) {
    let url = this.baseUrl + "/update"
    return this.http.post(url, shippingSlip,this.option)
  }


  getShippingSlipById(shippingSlipId: any) {
    let url = this.baseUrl + "/byid/" + shippingSlipId
    return this.http.get<any>(url,this.option)

  }

  accuse(shippingSlip: any) {
    let url = this.baseUrl + "/accuse"
    return this.http.post<any>(url, shippingSlip,this.option)

  }

  public addInvoice(shppingSlipInvoice: any) {
    let url = this.baseUrl + "/addinvoice"

    return this.http.post<any>(url, shppingSlipInvoice,this.option)


  }

  public formatShippingSlipNumber(shippingSlip: any): any {

    let shippingSlipNmber = ""
    let datePipe = new DatePipe("EN-en")
    let year = datePipe.transform(shippingSlip.date, "yyyy")
    if (shippingSlip.number < 10) return "000" + shippingSlip.number + "/" + year
    if (shippingSlip.number < 100) return "00" + shippingSlip.number + "/" + year
    if (shippingSlip.number < 1000) return "0" + shippingSlip.number + "/" + year
    return shippingSlip.number + "/" + year

  }


  public deleteInvoice(id: any) {
    let url = this.baseUrl + "/invoice/"+id
    return this.http.delete<any>(url, this.option)
  }

  updateShippingSlipDetail(shippingSlipInvoice: any) {
    let url = this.baseUrl + "/updateinvoice"
    return this.http.post(url, shippingSlipInvoice,this.option)
  }
}
