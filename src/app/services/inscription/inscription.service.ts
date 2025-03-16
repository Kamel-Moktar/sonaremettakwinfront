import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  baseUrl = environment.backendBaseUrl + "/inscription"
  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }
  constructor(private httpClient: HttpClient,private securityService:SecurityService) {
  }

  getAll() {
    const url = this.baseUrl + "/all"
    return this.httpClient.get<any>(url,this.option)
  }

  getAllBySession(sessionId: any) {
    const url = this.baseUrl + "/allbysession/" + sessionId
    return this.httpClient.get<any>(url,this.option)
  }

  getAllByCustomerBySession(cId: any,sId: any) {
    const url = this.baseUrl + "/customer/" + cId+"/"+sId
    return this.httpClient.get<any>(url,this.option)

  }

  getSessionByCustomer(cId: any) {

    const url = this.baseUrl + "/session/" + cId
    return this.httpClient.get<any>(url,this.option)

  }
  getAllByStagiaire(stagiaireId: any) {
    const url = this.baseUrl + "/allbystagiaire/" + stagiaireId
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

  public add(inscription: any) {
    const url = this.baseUrl + "/add"
    return this.httpClient.post(url, inscription,this.option)

  }


  public update(inscription: any) {
    const url = this.baseUrl + "/update"
    return this.httpClient.post(url, inscription,this.option)
  }

  updateDeclencheur(declencheur: any) {
    const url = this.baseUrl + "/updatedeclencheur"
    return this.httpClient.put(url, declencheur,this.option)
  }


}



