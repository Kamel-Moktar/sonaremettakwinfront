import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private http:HttpClient) { }


  public getAll(){
    return this.http.get<any>("http://localhost:8080/invoice/all")
  }

  public  add (invoice :any ){

    return this.http.post("http://localhost:8080/invoice/add",invoice)

  }

  public  delete(invoice :any ){
    return this.http.post("http://localhost:8080/invoice/delete",invoice)
  }

  public  update(invoice :any ){
    return this.http.post("http://localhost:8080/invoice/update",invoice)
  }





}
