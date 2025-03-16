import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  baseUrl = environment.backendBaseUrl + "/price"
  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }
  constructor(private httpClient: HttpClient,private securityService :SecurityService) {
  }

  getAll() {
    const url = this.baseUrl + "/"
    return this.httpClient.get<any>(url, this.option)
  }

  getAllParam(p: any) {
    let url = ""
    if (p)    url = this.baseUrl + "/param/" + p
     else  url = this.baseUrl + "/"

    return this.httpClient.get<any>(url, this.option)
  }

  getAllBySession(sessionId: any) {
    const url = this.baseUrl + "/action/" + sessionId
    return this.httpClient.get<any>(url, this.option)

  }


  getAllByHotel(hId: any, bId: any) {
    const url = this.baseUrl + "/hotel/" + hId + "/" + bId
    return this.httpClient.get<any>(url, this.option)

  }


  getById(id: any) {
    const url = this.baseUrl + "/" + id
    return this.httpClient.get<any>(url, this.option)

  }

  delete(id: any) {
    const url = this.baseUrl + "/" + id
    return this.httpClient.delete(url, this.option)

  }

  public add(price: any) {
    const url = this.baseUrl + "/"
    return this.httpClient.post(url, price, this.option)

  }


  public update(price: any) {
    const url = this.baseUrl + "/"
    return this.httpClient.put(url, price, this.option)
  }



}



