import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  baseUrl: any = environment.backendBaseUrl + "/auth"
  option: any = {
    headers: new HttpHeaders({"Authorization": "Bearer " + this.loadToken()}), observe: "body"
  }

  constructor(private  http: HttpClient) {
  }


  getAllUser() {

    let host = this.baseUrl + "/user";
    return this.http.get<any[]>(host, this.option)
  }


  getAllRole() {


    let host = this.baseUrl + "/roles";
    return this.http.get<any[]>(host, this.option).pipe();
  }

  addUser(user: any) {

    let host = this.baseUrl + "/user";

    return this.http.post<any>(host, user, this.option
    ).pipe();

  }


  deleteUser(user: any) {

    let host = this.baseUrl + "/user/" + user.id;
    return this.http.delete<void>(host, this.option).pipe();

  }

  getUserById(id: any) {
    let host = this.baseUrl + "/user/" + id

    return this.http.get<any>(host, this.option)

  }

  getUserByname(name: any): Observable<any> {

    let host = this.baseUrl + "/getUserByName/" + name;

    return this.http.get<any>(host, this.option
    )
  }


  doesUserExist(userName: String) {
    let host = this.baseUrl + "/get-user-by-name/" + userName
    return this.http.get<any>(host, this.option).pipe(
      map(response => response)
    )

  }

  login(user: any): Observable<any> {
    let host = this.baseUrl + "/login";
    let jwt: string | null;
    return this.http.post(host, user, {observe: "body"}).pipe(
      map((response: any) => {
        jwt = response.token;
        if (jwt) this.saveToken(jwt);
        console.log(user.username)
        this.getCurrentUser(user.username).subscribe((us:any)=> {

          this.saveCurrentUserId(us.id)
        })
        return {token: jwt, error: null};
      }),
      catchError(er => of(null))
    );

  }

  /*
  Modifier un collaborateur
   */

  updateUser(user: any): Observable<any> {
    console.log(user)
    let host = this.baseUrl + "/user";
    return this.http.put<any>(host, user, this.option).pipe();
  }


  modifierPassword(user: any) {

    let jwt = localStorage.getItem(environment.tokenName);
    let host = this.baseUrl;
    return this.http.put<any>(host + "/update/" + user.id, user.password, {
        headers: new HttpHeaders({"Authorization": "" + this.loadToken()}), observe: "body"
      }
    ).pipe();
  }

  getCurrentUser(name: any) {
    let jwt = localStorage.getItem(environment.tokenName);
    let host = this.baseUrl + "/currentUser";
    return this.http.post<any>(host, {name: name}, this.option)
  }


  saveToken(jwt: string) {
    localStorage.setItem(environment.tokenName, jwt);

  }

  saveCurrentUserId(userName: string) {
    localStorage.setItem(environment.currentUserId, userName);

  }

  loadToken() {
    return localStorage.getItem(environment.tokenName);
  }


  loadCurentUserId() {
    return localStorage.getItem(environment.currentUserId);
  }

  clearToken() {
    localStorage.removeItem(environment.tokenName);

  }

  clearCurrentUserName() {
    localStorage.removeItem(environment.currentUserId);

  }

  isEmailAlreadyUsed(email: String) {
    let host = this.baseUrl + "/is-email-used/" + email;
    return this.http.get<any>(host, this.option)
  }


  logout() {
    this.clearToken()
  }

  rinitPsw(a: any) {
    let host = this.baseUrl + "/rinitPassword";
    return this.http.post<any>(host, a, this.option)
  }

  changePassword(param: any) {

    let host = this.baseUrl + "/changePassword";
    return this.http.post<any>(host, param)
  }
}





