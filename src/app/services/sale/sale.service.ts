import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  baseUrl: any = environment.backendBaseUrl + "/sale"

  constructor(private  httpClient: HttpClient) {
  }// permettre de comunuquer avec les API

  public getSaleByInvoice(invoice: any) {
    let url = this.baseUrl + "/byinvoice/" + invoice.id
    return this.httpClient.get<any>(url)
  }
  public getOffreByProformaByTva(param: any) {
    let url = this.baseUrl + "/byinvoicebytva"
    return this.httpClient.post<any>(url,param)
  }
  public getSaleById(id: any) {
    let url = this.baseUrl + "/byid/" + id
    return this.httpClient.get<any>(url)
  }

  public add(sale: any) {
    let url = this.baseUrl + "/add"
    return this.httpClient.post(url, sale)

  }

  public delete(sale: any) {
    let url = this.baseUrl + "/delete"
    return this.httpClient.post(url, sale);

  }

  public update(sale: any) {

    let url = this.baseUrl + "/update"
    return this.httpClient.post(url, sale)


  }


}
