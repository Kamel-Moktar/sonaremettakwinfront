import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InvoiceDetailService {

  baseUrl: any = environment.backendBaseUrl + "/invoice-detail"

  constructor(private http: HttpClient) {
  }

  public getAll() {
    let url = this.baseUrl + "/"
    return this.http.get<any[]>(url)
  }

  public getById(id: any) {
    let url = this.baseUrl + "/"+id
    return this.http.get<any[]>(url)
  }

  public getInvoice(id: any) {
    let url = this.baseUrl + "/invoice/"+id
    return this.http.get<any[]>(url)
  }

  public add(invoiceDetail: any) {
    let url = this.baseUrl + "/"
    return this.http.post<any[]>(url,invoiceDetail)
  }
  public update(invoiceDetail: any) {
    let url = this.baseUrl + "/"
    return this.http.put<any[]>(url,invoiceDetail)
  }

  public delete(id: any) {
    let url = this.baseUrl + "/"+id
    return this.http.delete<any[]>(url)
  }

}
