import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  baseUrl = environment.backendBaseUrl + "/inscription"

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    const url = this.baseUrl + "/all"
    return this.httpClient.get<any>(url)
  }

  getAllBySession(sessionId: any) {
    const url = this.baseUrl + "/allbysession/" + sessionId
    return this.httpClient.get<any>(url)
  }

  getAllByCustomerBySession(cId: any,sId: any) {
    const url = this.baseUrl + "/customer/" + cId+"/"+sId
    return this.httpClient.get<any>(url)

  }

  getSessionByCustomer(cId: any) {

    const url = this.baseUrl + "/session/" + cId
    return this.httpClient.get<any>(url)

  }
  getAllByStagiaire(stagiaireId: any) {
    const url = this.baseUrl + "/allbystagiaire/" + stagiaireId
    return this.httpClient.get<any>(url)
  }

  getById(id: any) {
    const url = this.baseUrl + "/byid/" + id
    return this.httpClient.get<any>(url)

  }

  delete(a: any) {
    const url = this.baseUrl + "/delete"
    return this.httpClient.post(url, a)

  }

  public add(inscription: any) {
    const url = this.baseUrl + "/add"
    return this.httpClient.post(url, inscription)

  }


  public update(inscription: any) {
    const url = this.baseUrl + "/update"
    return this.httpClient.post(url, inscription)
  }

  updateDeclencheur(declencheur: any) {
    const url = this.baseUrl + "/updatedeclencheur"
    return this.httpClient.put(url, declencheur)
  }


}



