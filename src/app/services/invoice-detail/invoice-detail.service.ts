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

  public getPhase(id:any,id1:any) {
    let url = this.baseUrl + "/phase/"+id+"/"+id1
    return this.http.get<any[]>(url)
  }

  public getById(id: any) {
    let url = this.baseUrl + "/"+id
    return this.http.get<any>(url)
  }

  public getInvoice(id: any) {
    let url = this.baseUrl + "/invoice/"+id
    return this.http.get<any[]>(url)
  }

  public getDistinctInscriptionByInvoice(id: any) {
    let url = this.baseUrl + "/inscription/"+id
    return this.http.get<any[]>(url)
  }

  public getDistinctSessionByInvoice(id: any) {
    let url = this.baseUrl + "/session/"+id
    return this.http.get<any[]>(url)
  }

  public updateIsBilled(invoiceDetail: any) {
    let url = this.baseUrl + "/isbilled"
    return this.http.post<any[]>(url,invoiceDetail)
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
    return this.http.delete<any>(url)
  }

  deleteAll(id :any, id2:any) {
    let url = this.baseUrl + "/"+id+"/"+id2
    return this.http.delete<any>(url)
  }

  add1(d :any) {


    let url = this.baseUrl + "/add"
    return this.http.post<any[]>(url,d)
  }



}
