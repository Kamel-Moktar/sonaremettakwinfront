import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SecurityService} from "../security/security.service";


@Injectable({
  providedIn: 'root'
})
export class UniteMesureService {

  baseUrl: any = environment.backendBaseUrl + "/unitemesure/"

  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }

  constructor(private httpClient: HttpClient,private securityService :SecurityService) {
  }
  public getAll(name: any) {

    let url = this.baseUrl + "all"
    return this.httpClient.post<any>(url, name, this.option)
  }

  public getUniteMesureById(id: any) {
    let url = this.baseUrl + "byid/" + id
    return this.httpClient.get<any>(url, this.option)
  }

  public getUnits() {
    let url = this.baseUrl + "unit"
    return this.httpClient.get<any>(url, this.option)
  }

  public add(unitemesure: any) {
    let url = this.baseUrl + "add"
    return this.httpClient.post(url, unitemesure, this.option)
  }

  public delete(uniteMesure: any) {
    let url = this.baseUrl + "delete"
    return this.httpClient.post(url, uniteMesure, this.option);

  }

  public update(uniteMesure: any) {
    let url = this.baseUrl + "update"
    return this.httpClient.post(url, uniteMesure, this.option)


  }


}
