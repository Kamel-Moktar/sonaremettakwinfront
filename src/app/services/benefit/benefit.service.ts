import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BenefitService {

baseUrl=environment.backendBaseUrl+"/benefit"

  constructor(private httpClient  : HttpClient) { }

  getAll() {
    const url=this.baseUrl+"/all"
    return this.httpClient.get<any>(url)

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
    const url=this.baseUrl+"update"
    return this.httpClient.put(url,benefit)
  }
}
