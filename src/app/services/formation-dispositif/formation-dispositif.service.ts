import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class FormationDispositifService {


  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }
  constructor(private http: HttpClient,private securityService:SecurityService) {
  }

  baseUrl = environment.backendBaseUrl + "/formation-dispositif"

  public getAll() {
    const url = this.baseUrl + "/all"
    return this.http.get<any>(url,this.option)
  }

  public add(formationDispositifl: any) {
    const url = this.baseUrl + "/add"
    return this.http.post(url, formationDispositifl,this.option)

  }

  public delete(formationDispositif: any) {
    const url = this.baseUrl + "/delete"
    return this.http.post(url, formationDispositif,this.option)
  }

  public update(formationDispositif: any) {
    const url = this.baseUrl + "/update"
    return this.http.post(url, formationDispositif,this.option)
  }


  getById(id: any) {
    const url = this.baseUrl + "/byid/" + id

    return this.http.get<any>(url,this.option)
  }

  getByAction(actionId: any) {
    const url = this.baseUrl + "/byactionid/" + actionId

    return this.http.get<any>(url,this.option)
  }
}
