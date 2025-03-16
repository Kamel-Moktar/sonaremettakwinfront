import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }
  constructor(private http: HttpClient,private securityService :SecurityService) {
  }

  baseUrl = environment.backendBaseUrl + "/customer"

  public getAll() {
    const url = this.baseUrl + "/all"
    return this.http.get<any>(url,this.option)
  }

  public getAllParam(param: any) {
    const url = this.baseUrl + "/allparam"
    return this.http.post<any>(url, param,this.option)
  }

  public add(customer: any) {
    const url = this.baseUrl + "/add"
    return this.http.post(url, customer,this.option)

  }

  public delete(customer: any) {
    const url = this.baseUrl + "/delete"
    return this.http.post(url, customer,this.option)
  }

  public update(customer: any) {
    const url = this.baseUrl + "/update"
    return this.http.post(url, customer,this.option)
  }


  getById(id: any) {
    const url = this.baseUrl + "/byid/" + id

    return this.http.get<any>(url,this.option)
  }
}
