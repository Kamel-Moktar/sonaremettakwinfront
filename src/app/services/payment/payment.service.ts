import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl: any = environment.backendBaseUrl + "/payment"
  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }

  constructor(private http: HttpClient,private securityService :SecurityService) {
  }

  public getAll() {
    let url = this.baseUrl + "/all"
    return this.http.get<any>(url, this.option)
  }

  public identification(id:any) {
    let url = this.baseUrl + "/identification/"+id
    return this.http.get<any>(url, this.option)
  }

  public getEncaissementByPayment(paymentId: any) {
    let url = this.baseUrl + "/encaissementbypayment/" + paymentId
    return this.http.get<any[]>(url, this.option)
  }

  public getEncaissementById(encaissementId: any) {
    let url = this.baseUrl + "/encaissementbyid/" + encaissementId
    return this.http.get<any>(url, this.option)
  }

  public add(payment: any) {
    let url = this.baseUrl + "/add"


    return this.http.post(url, payment)

  }

  public delete(payment: any) {
    let url = this.baseUrl + "/delete"
    return this.http.post<any>(url, payment)
  }

  public update(payment: any) {
    let url = this.baseUrl + "/update"
    console.log(payment)
    return this.http.put(url, payment, this.option)
  }


  getPaymentById(paymentId: any) {
    let url = this.baseUrl + "/byid/" + paymentId
    return this.http.get<any>(url, this.option)
  }


  public addEncaissement(encaissement: any) {
    let url = this.baseUrl + "/addencaissement"
    return this.http.post<any>(url, encaissement, this.option)
  }


  public deleteEncaissement(encaissement: any) {
    let url = this.baseUrl + "/deleteencaissement"
    return this.http.post<any>(url, encaissement, this.option)
  }

  updateEncaissement(encaissement: any) {
    let url = this.baseUrl + "/updateencaissement"
    return this.http.post(url, encaissement, this.option)
  }


}
