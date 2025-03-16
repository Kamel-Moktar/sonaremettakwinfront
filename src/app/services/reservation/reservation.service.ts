import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  baseUrl = environment.backendBaseUrl + "/booking"
  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }

  constructor(private httpClient: HttpClient,private securityService :SecurityService) {
  }

  getAll() {
    const url = this.baseUrl + "/all"
    return this.httpClient.get<any>(url, this.option)
  }

  getRoomType() {
    const url = this.baseUrl + "/roomtype"
    return this.httpClient.get<any>(url, this.option)
  }

  getAllBySession(sessionId: any) {
    const url = this.baseUrl + "/bysession/" + sessionId
    return this.httpClient.get<any>(url, this.option)

  }

  getFavoriteBooking(sessionId: any) {
    const url = this.baseUrl + "/favoritebooking/" + sessionId
    return this.httpClient.get<any>(url, this.option)

  }

  getAllByStagiaire(stagiaireId: any) {
    const url = this.baseUrl + "/allbystagiaire/" + stagiaireId
    return this.httpClient.get<any>(url, this.option)
  }
  getAllByInscription(inscriptionId: any) {
    const url = this.baseUrl + "/allbyinscription/" +inscriptionId
    return this.httpClient.get<any>(url, this.option)
  }


  getById(id: any) {
    const url = this.baseUrl + "/byid/" + id
    return this.httpClient.get<any>(url, this.option)

  }

  delete(a: any) {
    const url = this.baseUrl + "/delete"
    return this.httpClient.post(url, a, this.option)

  }

  public add(booking: any) {
    const url = this.baseUrl + "/add"
    return this.httpClient.post(url, booking, this.option)

  }


  public update(booking: any) {
    const url = this.baseUrl + "/update"
    return this.httpClient.post(url, booking, this.option)
  }

  updateDeclencheur(declencheur: any) {
    const url = this.baseUrl + "/updatedeclencheur"
    return this.httpClient.put(url, declencheur, this.option)


  }


}



