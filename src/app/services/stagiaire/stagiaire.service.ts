import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  baseUrl = environment.backendBaseUrl + "/stagiaire"

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    const url = this.baseUrl + "/all"
    return this.httpClient.get<any>(url)

  }

  getParam(param: any) {

    const url = this.baseUrl + "/param"
    return this.httpClient.post<any>(url, param)

  }

  getAllBySession(sessionId: any) {
    const url = this.baseUrl + "/allbysession/" + sessionId
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

  public add(stagiaire: any) {
    console.log(stagiaire)
    const url = this.baseUrl + "/add"
    return this.httpClient.post(url, stagiaire)

  }


  public update(stagiaire: any) {
    const url = this.baseUrl + "/update"
    return this.httpClient.post(url, stagiaire)
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
