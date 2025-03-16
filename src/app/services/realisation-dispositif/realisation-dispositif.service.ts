import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class RealisationDispositifService {

  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }

  constructor(private http: HttpClient,private securityService :SecurityService) {
  }

  baseUrl = environment.backendBaseUrl + "/realisationDispositif"

  public getAll() {
    const url = this.baseUrl + "/all"
    return this.http.get<any>(url, this.option)
  }

  public add(realisationDispositif: any) {
    const url = this.baseUrl + "/add"
    return this.http.post(url, realisationDispositif, this.option)

  }

  public delete(realisationDispositif: any) {
    const url = this.baseUrl + "/delete"
    return this.http.post(url, realisationDispositif, this.option)
  }

  public update(realisationDispositif: any) {
    const url = this.baseUrl + "/update"
    return this.http.post(url, realisationDispositif, this.option)
  }


  getById(id: any) {
    const url = this.baseUrl + "/byid/" + id

    return this.http.get<any>(url, this.option)
  }
}
