import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BenefitService {



  constructor(private httpClient  : HttpClient) { }

  getAll() {

    return this.httpClient.get<any>("http://localhost:8080/benefit/all")

  }

  delete(a: any) {
    return this.httpClient.post("http://localhost:8080/benefit/delete",a)

  }

  public  add (benefit :any ){

    return this.httpClient.post("http://localhost:8080/benefit/add",benefit)

  }


  public update( benefit :any ) {


    return this.httpClient.put("http://localhost:8080/benefit/update",benefit)
  }
}
