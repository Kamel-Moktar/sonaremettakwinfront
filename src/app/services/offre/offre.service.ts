import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  baseUrl: any = environment.backendBaseUrl + "/offre"
  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }
  constructor(private  httpClient: HttpClient,private securityService :SecurityService) {
  }// permettre de comunuquer avec les API

  public getOffreByProforma(proforma: any) {
    let url = this.baseUrl + "/byproforma/" + proforma.id
    return this.httpClient.get<any>(url, this.option)
  }

  public getOffreByProformaByTva(param: any) {
    let url = this.baseUrl + "/byproformabytva"
    return this.httpClient.post<any>(url,param, this.option)
  }

  public getOffreById(id: any) {
    let url = this.baseUrl + "/byid/" + id
    return this.httpClient.get<any>(url, this.option)
  }

  public add(offre: any) {
    let url = this.baseUrl + "/add"
    return this.httpClient.post(url, offre, this.option)

  }

  public delete(offre: any) {
    let url = this.baseUrl + "/delete"
    return this.httpClient.post(url, offre, this.option);

  }

  public update(offre: any) {

    let url = this.baseUrl + "/update"
    return this.httpClient.post(url, offre, this.option)


  }


}
