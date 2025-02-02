import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  baseUrl = environment.backendBaseUrl + "/price"

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    const url = this.baseUrl + "/"
    return this.httpClient.get<any>(url)
  }

  getAllParam(p: any) {
    let url = ""
    if (p)    url = this.baseUrl + "/param/" + p
     else  url = this.baseUrl + "/"

    return this.httpClient.get<any>(url)
  }

  getAllBySession(sessionId: any) {
    const url = this.baseUrl + "/action/" + sessionId
    return this.httpClient.get<any>(url)

  }


  getAllByHotel(hId: any, bId: any) {
    const url = this.baseUrl + "/hotel/" + hId + "/" + bId
    return this.httpClient.get<any>(url)

  }


  getById(id: any) {
    const url = this.baseUrl + "/" + id
    return this.httpClient.get<any>(url)

  }

  delete(id: any) {
    const url = this.baseUrl + "/" + id
    return this.httpClient.delete(url)

  }

  public add(price: any) {
    const url = this.baseUrl + "/"
    return this.httpClient.post(url, price)

  }


  public update(price: any) {
    const url = this.baseUrl + "/"
    return this.httpClient.put(url, price)
  }



}



