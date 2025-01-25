import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient) {

  }

  baseUrl = environment.backendBaseUrl + "/module"

  public getAll(n:any,n1: any) {
    const url = this.baseUrl + "/?name="+n+"&domaine="+n1
    return this.http.get<any>(url)
  }

  public add(module: any) {
    console.log(module)
    const url = this.baseUrl + "/add"
    return this.http.post(url, module)

  }

  public delete(module: any) {
    const url = this.baseUrl + "/delete"
    return this.http.post(url, module)
  }

  public update(module: any) {
    const url = this.baseUrl + "/update"
    return this.http.post(url, module)
  }


  getById(id: any) {
    const url = this.baseUrl + "/byid/" + id

    return this.http.get<any>(url)
  }
}
