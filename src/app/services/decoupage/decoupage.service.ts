import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class DecoupageService {
  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }
  constructor(private http: HttpClient,private securityService :SecurityService) {
  }

  baseUrl = environment.backendBaseUrl + "/decoupage"

  public getWilaya() {
    const url = this.baseUrl + "/wilaya"
    return this.http.get<any>(url,this.option)
  }

  public getCommune(wilayaName: any) {
    const url = this.baseUrl + "/commune/" + wilayaName
    return this.http.get<any>(url,this.option)
  }

}
