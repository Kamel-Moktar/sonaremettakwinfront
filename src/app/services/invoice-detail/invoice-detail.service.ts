import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class InvoiceDetailService {

  baseUrl: any = environment.backendBaseUrl + "/invoice-detail"
  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }
  constructor(private http: HttpClient,private securityService :SecurityService) {
  }

  public getAll() {
    let url = this.baseUrl + "/"
    return this.http.get<any[]>(url, this.option)
  }

  public getPhase(id:any,id1:any) {
    let url = this.baseUrl + "/phase/"+id+"/"+id1
    return this.http.get<any[]>(url, this.option)
  }

  public getById(id: any) {
    let url = this.baseUrl + "/"+id
    return this.http.get<any>(url, this.option)
  }

  public getInvoice(id: any) {
    let url = this.baseUrl + "/invoice/"+id
    return this.http.get<any[]>(url, this.option)
  }

  public getDistinctInscriptionByInvoice(id: any) {
    let url = this.baseUrl + "/inscription/"+id
    return this.http.get<any[]>(url, this.option)
  }

  public getDistinctSessionByInvoice(id: any) {
    let url = this.baseUrl + "/session/"+id
    return this.http.get<any[]>(url, this.option)
  }

  public updateIsBilled(invoiceDetail: any) {
    let url = this.baseUrl + "/isbilled"
    return this.http.post<any[]>(url,invoiceDetail, this.option)
  }
  public add(invoiceDetail: any) {


    let url = this.baseUrl + "/"
    return this.http.post<any[]>(url,invoiceDetail, this.option)
  }
  public update(invoiceDetail: any) {
    let url = this.baseUrl + "/"
    return this.http.put<any[]>(url,invoiceDetail, this.option)
  }

  public delete(id: any) {
    let url = this.baseUrl + "/"+id
    return this.http.delete<any>(url, this.option)
  }

  deleteAll(id :any, id2:any) {
    let url = this.baseUrl + "/"+id+"/"+id2
    return this.http.delete<any>(url, this.option)
  }

  add1(d :any) {


    let url = this.baseUrl + "/add"
    return this.http.post<any[]>(url,d, this.option)
  }


  refresh(d:any) {
    let url = this.baseUrl + "/refresh"
    return this.http.post<any[]>(url,d, this.option)
  }
}
