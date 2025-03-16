import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  option:any ={
    headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()}), observe: "body"
  }
  constructor(private http: HttpClient,private securityService :SecurityService) {

  }

  baseUrl = environment.backendBaseUrl + "/module"

  public getAll(n:any,n1: any) {
    const url = this.baseUrl + "/?name="+n+"&domaine="+n1
    return this.http.get<any>(url, this.option)
  }

  public add(module: any) {
    console.log(module)
    const url = this.baseUrl + "/add"
    return this.http.post(url, module, this.option)

  }

  public delete(module: any) {
    const url = this.baseUrl + "/delete"
    return this.http.post(url, module, this.option)
  }

  public update(module: any) {
    const url = this.baseUrl + "/update"
    return this.http.post(url, module, this.option)
  }


  getById(id: any) {
    const url = this.baseUrl + "/byid/" + id

    return this.http.get<any>(url, this.option)
  }
}
