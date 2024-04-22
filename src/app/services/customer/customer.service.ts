import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }


  public getAll(){
    return this.http.get<any>("http://localhost:8080/customer/all")
  }

  public  add (customer :any ){

    return this.http.post("http://localhost:8080/customer/add",customer)

  }

  public  delete(customer :any ){
   return this.http.post("http://localhost:8080/customer/delete",customer)
  }

  public  update(customer :any ){
    return this.http.post("http://localhost:8080/customer/update",customer)
  }





}
