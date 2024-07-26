import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  baseUrl=environment.backendBaseUrl+"/customer"

  public getAll(){
    const url=this.baseUrl+"/all"
    return this.http.get<any>(url)
  }

  public getAllParam(param:any){
    const url=this.baseUrl+"/allparam"
    return this.http.post<any>(url,param)
  }

  public  add (customer :any ){
    const url=this.baseUrl+"/add"
    return this.http.post(url,customer)

  }

  public  delete(customer :any ){
    const url=this.baseUrl+"/delete"
   return this.http.post(url,customer)
  }

  public  update(customer :any ){
    const url=this.baseUrl+"/update"
    return this.http.post(url,customer)
  }


  getById(id: any) {
    const url=this.baseUrl+"/byid/"+id

    return this.http.get<any>(url)
  }
}
