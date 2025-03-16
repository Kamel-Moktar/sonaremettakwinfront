import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  baseUrl: any = environment.backendBaseUrl + "/sale"

  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }

  constructor(private httpClient: HttpClient,private securityService :SecurityService) {
  }
  public getSaleByInvoice(invoice: any) {
    let url = this.baseUrl + "/byinvoice/" + invoice.id
    return this.httpClient.get<any>(url, this.option)
  }
  public getOffreByProformaByTva(param: any) {
    let url = this.baseUrl + "/byinvoicebytva"
    return this.httpClient.post<any>(url,param, this.option)
  }
  public getSaleById(id: any) {
    let url = this.baseUrl + "/byid/" + id
    return this.httpClient.get<any>(url, this.option)
  }

  public add(sale: any) {
    let url = this.baseUrl + "/add"
    return this.httpClient.post(url, sale, this.option)

  }

  public delete(sale: any) {
    let url = this.baseUrl + "/delete"
    return this.httpClient.post(url, sale, this.option);

  }

  public update(sale: any) {

    let url = this.baseUrl + "/update"
    return this.httpClient.post(url, sale, this.option)


  }


}
