import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class BenefitService {

  baseUrl = environment.backendBaseUrl + "/benefit"
  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken(), observe: "body"})
  }
  constructor(private httpClient: HttpClient,private securityService :SecurityService) {
  }

  getAll() {
    const url = this.baseUrl + "/all"
    return this.httpClient.get<any>(url,this.option)

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

  public tva1() {
    const url = this.baseUrl + "/tva"
    return this.httpClient.get(url,this.option)
  }

  public static tva(){
    return [0,0.09,0.19]
  }


}
