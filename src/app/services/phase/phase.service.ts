import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  baseUrl = environment.backendBaseUrl + "/phase"
  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }
  constructor(private httpClient: HttpClient,private securityService :SecurityService) {
  }

  getAll() {
    const url = this.baseUrl + "/all"
    return this.httpClient.get<any>(url, this.option)
  }


  getAllBySessionForBilling(id:any) {
    const url = this.baseUrl + "/billing/"+id
    return this.httpClient.get<any>(url, this.option)
  }

  getAllBySession(sessionId: any) {
    const url = this.baseUrl + "/allbysession/" + sessionId
    return this.httpClient.get<any>(url, this.option)

  }

  getPhasePropose(sessionId: any) {
    const url = this.baseUrl + "/phasepropose/" + sessionId
    return this.httpClient.get<any>(url, this.option)

  }

  grtTypePhase() {
    const url = this.baseUrl + "/typephase"
    return this.httpClient.get<any>(url, this.option)
  }

  grtLieuPhase() {
    const url = this.baseUrl + "/lieuphase"
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

  public add(phase: any) {
    const url = this.baseUrl + "/add"
    return this.httpClient.post(url, phase, this.option)

  }


  public update(phase: any) {
    const url = this.baseUrl + "/update"


    return this.httpClient.put(url, phase, this.option)
  }


  public getChronogramme(param:any) {

    const url = this.baseUrl + "/chronogramme"
    return this.httpClient.post<any>(url, param, this.option)
  }


}



