import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  baseUrl: any = environment.backendBaseUrl + "/offre"

  constructor(private  httpClient: HttpClient) {
  }// permettre de comunuquer avec les API

  public getOffreByProforma(proforma: any) {
    let url = this.baseUrl + "/byproforma/" + proforma.id
    return this.httpClient.get<any>(url)
  }

  public getOffreById(id: any) {
    let url = this.baseUrl + "/byid/" + id
    return this.httpClient.get<any>(url)
  }

  public add(offre: any) {
    let url = this.baseUrl + "/add"
    return this.httpClient.post(url, offre)

  }

  public delete(offre: any) {
    let url = this.baseUrl + "/delete"
    return this.httpClient.post(url, offre);

  }

  public update(offre: any) {

    let url = this.baseUrl + "/update"
    return this.httpClient.post(url, offre)


  }


}
