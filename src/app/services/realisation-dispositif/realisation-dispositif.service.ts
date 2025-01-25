import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RealisationDispositifService {



  constructor(private http: HttpClient) {
  }

  baseUrl = environment.backendBaseUrl + "/realisationDispositif"

  public getAll() {
    const url = this.baseUrl + "/all"
    return this.http.get<any>(url)
  }

  public add(realisationDispositif: any) {
    const url = this.baseUrl + "/add"
    return this.http.post(url, realisationDispositif)

  }

  public delete(realisationDispositif: any) {
    const url = this.baseUrl + "/delete"
    return this.http.post(url, realisationDispositif)
  }

  public update(realisationDispositif: any) {
    const url = this.baseUrl + "/update"
    return this.http.post(url, realisationDispositif)
  }


  getById(id: any) {
    const url = this.baseUrl + "/byid/" + id

    return this.http.get<any>(url)
  }
}
