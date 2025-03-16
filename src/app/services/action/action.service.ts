import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  baseUrl = environment.backendBaseUrl + "/action"
  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }

  constructor(private httpClient: HttpClient,private securityService :SecurityService) {
  }

  getAll() {
    const url = this.baseUrl + "/all"
    return this.httpClient.get<any>(url,this.option)

  }

  public getAllParam(param: any) {
    let url = this.baseUrl + "/allparam"
    return this.httpClient.post<any[]>(url, param,this.option)
  }

  getById(id: any) {
    const url = this.baseUrl + "/byid/" + id
    return this.httpClient.get<any>(url,this.option)

  }

  delete(a: any) {
    const url = this.baseUrl + "/delete"
    return this.httpClient.post(url, a,this.option)

  }

  public add(benefit: any) {
    const url = this.baseUrl + "/add"
    return this.httpClient.post(url, benefit,this.option)

  }


  public update(benefit: any) {
    const url = this.baseUrl + "/update"
    return this.httpClient.put(url, benefit,this.option)
  }

  getType() {
    return ['Formation','Séminaire']
  }
}
