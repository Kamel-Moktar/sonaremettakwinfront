import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl: any = environment.backendBaseUrl + "/payment"


  constructor(private http: HttpClient) {
  }

  public getAll() {
    let url = this.baseUrl + "/all"
    return this.http.get<any>(url)
  }

  public getEncaissementByPayment(paymentId: any) {
    let url = this.baseUrl + "/encaissementbypayment/" + paymentId
    return this.http.get<any[]>(url)
  }

  public getEncaissementById(encaissementId: any) {
    let url = this.baseUrl + "/encaissementbyid/" + encaissementId
    return this.http.get<any>(url)
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
    return this.http.post(url, payment)
  }


  getPaymentById(paymentId: any) {
    let url = this.baseUrl + "/byid/" + paymentId
    return this.http.get<any>(url)
  }


  public addEncaissement(encaissement: any) {
    let url = this.baseUrl + "/addencaissement"
    return this.http.post<any>(url, encaissement)
  }


  public deleteEncaissement(encaissement: any) {
    let url = this.baseUrl + "/deleteencaissement"
    return this.http.post<any>(url, encaissement)
  }

  updateEncaissement(encaissement: any) {
    let url = this.baseUrl + "/updateencaissement"
    return this.http.post(url, encaissement)
  }


}
