import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  baseUrl=environment.backendBaseUrl+"/action"

  constructor(private httpClient  : HttpClient) { }

  getAll() {
    const url=this.baseUrl+"/all"
    return this.httpClient.get<any>(url)

  }

  public getAllParam(param :any) {
    let url = this.baseUrl + "/allparam"
    return this.httpClient.post<any[]>(url,param)
  }

  getById(id :any) {
    const url=this.baseUrl+"/byid/"+id
    return this.httpClient.get<any>(url)

  }

  delete(a: any) {
    const url=this.baseUrl+"/delete"
    return this.httpClient.post(url,a)

  }

  public  add (benefit :any ){
    const url=this.baseUrl+"/add"
    return this.httpClient.post(url,benefit)

  }


  public update( benefit :any ) {
    const url=this.baseUrl+"/update"
    return this.httpClient.put(url,benefit)
  }
}
