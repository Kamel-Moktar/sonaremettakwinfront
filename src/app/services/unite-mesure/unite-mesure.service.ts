import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UniteMesureService {

baseUrl :any=environment.backendBaseUrl+"/unitemesure/"

  constructor(private  httpClient: HttpClient) { }// permettre de comunuquer avec les API
  public getAll(name:any){

    let url=this.baseUrl+"all"
    return this.httpClient.post<any>(url,name)
  }

  public getUniteMesureById(id : any){
    let url=this.baseUrl+"byid/"+id
  return this.httpClient.get<any>(url)
  }

  public getUnits(){
    let url=this.baseUrl+"unit"
    return this.httpClient.get<any>(url)
  }

  public  add (unitemesure :any ){
    let url=this.baseUrl+"add"
    return this.httpClient.post(url,unitemesure)
  }

  public delete(uniteMesure: any) {
    let url=this.baseUrl+"delete"
   return  this.httpClient.post(url,uniteMesure);

  }
  public  update(uniteMesure :any ){
    let url=this.baseUrl+"update"
    return this.httpClient.post(url,uniteMesure)


  }


}
