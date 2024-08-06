import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DomaineService {


  constructor(private http: HttpClient) {
  }

  baseUrl = environment.backendBaseUrl + "/domaine"

  public getAll() {
    const url = this.baseUrl + "/all"
    return this.http.get<any>(url)
  }

  public add(domaine: any) {
    const url = this.baseUrl + "/add"
    return this.http.post(url, domaine)

  }

  public delete(domaine: any) {
    const url = this.baseUrl + "/delete"
    return this.http.post(url, domaine)
  }

  public update(domaine: any) {
    const url = this.baseUrl + "/update"
    return this.http.post(url, domaine)
  }


  getById(id: any) {
    const url = this.baseUrl + "/byid/" + id

    return this.http.get<any>(url)
  }
}
