import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HotelService {



  constructor(private http: HttpClient) {
  }

  baseUrl = environment.backendBaseUrl + "/hotel"

  public getAll() {
    const url = this.baseUrl + "/all"
    return this.http.get<any>(url)
  }

  public add(hotel: any) {
    const url = this.baseUrl + "/add"
    return this.http.post(url, hotel)

  }

  public delete(hotel: any) {
    const url = this.baseUrl + "/delete"
    return this.http.post(url, hotel)
  }

  public update(hotel: any) {
    const url = this.baseUrl + "/update"
    return this.http.post(url, hotel)
  }


  getById(id: any) {
    const url = this.baseUrl + "/byid/" + id

    return this.http.get<any>(url)
  }
}
