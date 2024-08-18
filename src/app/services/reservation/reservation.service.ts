import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  baseUrl = environment.backendBaseUrl + "/booking"

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    const url = this.baseUrl + "/all"
    return this.httpClient.get<any>(url)
  }

  getRoomType() {
    const url = this.baseUrl + "/roomtype"
    return this.httpClient.get<any>(url)
  }

  getAllBySession(sessionId: any) {
    const url = this.baseUrl + "/bysession/" + sessionId
    return this.httpClient.get<any>(url)

  }

  getFavoriteBooking(sessionId: any) {
    const url = this.baseUrl + "/favoritebooking/" + sessionId
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

  public add(booking: any) {
    const url = this.baseUrl + "/add"
    return this.httpClient.post(url, booking)

  }


  public update(booking: any) {
    const url = this.baseUrl + "/update"
    return this.httpClient.post(url, booking)
  }

  updateDeclencheur(declencheur: any) {
    const url = this.baseUrl + "/updatedeclencheur"
    return this.httpClient.put(url, declencheur)


  }


}



