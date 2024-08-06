import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DecoupageService {

  constructor(private http: HttpClient) {
  }

  baseUrl = environment.backendBaseUrl + "/decoupage"

  public getWilaya() {
    const url = this.baseUrl + "/wilaya"
    return this.http.get<any>(url)
  }

  public getCommune(wilayaName: any) {
    const url = this.baseUrl + "/commune/" + wilayaName
    return this.http.get<any>(url)
  }

}
