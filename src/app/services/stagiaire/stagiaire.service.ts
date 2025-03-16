import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  baseUrl = environment.backendBaseUrl + "/stagiaire"

  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }

  constructor(private httpClient: HttpClient,private securityService :SecurityService) {
  }

  getAll() {
    const url = this.baseUrl + "/all"
    return this.httpClient.get<any>(url, this.option)

  }

  getParam(param: any) {

    const url = this.baseUrl + "/param"
    return this.httpClient.post<any>(url, param, this.option)

  }

  getAllBySession(sessionId: any) {
    const url = this.baseUrl + "/allbysession/" + sessionId
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

  public add(stagiaire: any) {

    const url = this.baseUrl + "/add"
    return this.httpClient.post(url, stagiaire, this.option)

  }


  public update(stagiaire: any) {
    const url = this.baseUrl + "/update"
    return this.httpClient.post(url, stagiaire, this.option)
  }

  public getSexe(){
    return ['M','F'];
  }

  public getSchoolLevel(){
    return ["1AM","2AM","3AM","4AM","1AS","2AS","3AS","BAC","BAC+1","BAC+2","BAC+3","BAC+4","BAC+5"]
  }

  public getGSP(){
    return ["CADRE","MAITRISE","EXECUTION"]
  }
}
