import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  baseUrl = environment.backendBaseUrl + "/session"

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    const url = this.baseUrl + "/all"
    return this.httpClient.get<any>(url)

  }

  getAllParam(param: any) {
    const url = this.baseUrl + "/allparam"
    return this.httpClient.post<any>(url, param)

  }

  getById(id: any) {
    const url = this.baseUrl + "/byid/" + id
    return this.httpClient.get<any>(url)

  }

  delete(a: any) {
    const url = this.baseUrl + "/delete"
    return this.httpClient.post(url, a)

  }

  public add(benefit: any) {
    const url = this.baseUrl + "/add"
    return this.httpClient.post(url, benefit)

  }


  public update(benefit: any) {
    const url = this.baseUrl + "/update"
    return this.httpClient.put(url, benefit)
  }
}
