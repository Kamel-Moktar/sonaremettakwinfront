import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UniteMesureService {

  constructor(private  httpClient: HttpClient) { }// permettre de comunuquer avec les API
  public getAll(name:any){


    return this.httpClient.post<any>("http://localhost:8080/unitemesure/all",name)
  }
  public  add (unitemesure :any ){

    return this.httpClient.post("http://localhost:8080/unitemesure/add",unitemesure)

  }

  public delete(uniteMesure: any) {
   return  this.httpClient.post("http://localhost:8080/unitemesure/kadour",uniteMesure);

  }
  public  update(uniteMesure :any ){
    return this.httpClient.post("http://localhost:8080/customer/update",uniteMesure)


  }


}
