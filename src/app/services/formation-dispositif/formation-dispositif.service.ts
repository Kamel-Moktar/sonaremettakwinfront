import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FormationDispositifService {



  constructor(private http: HttpClient) {
  }

  baseUrl = environment.backendBaseUrl + "/formation-dispositif"

  public getAll() {
    const url = this.baseUrl + "/all"
    return this.http.get<any>(url)
  }

  public add(formationDispositifl: any) {
    const url = this.baseUrl + "/add"
    return this.http.post(url, formationDispositifl)

  }

  public delete(formationDispositif: any) {
    const url = this.baseUrl + "/delete"
    return this.http.post(url, formationDispositif)
  }

  public update(formationDispositif: any) {
    const url = this.baseUrl + "/update"
    return this.http.post(url, formationDispositif)
  }


  getById(id: any) {
    const url = this.baseUrl + "/byid/" + id

    return this.http.get<any>(url)
  }

  getByAction(actionId: any) {
    const url = this.baseUrl + "/byactionid/" + actionId

    return this.http.get<any>(url)
  }
}
