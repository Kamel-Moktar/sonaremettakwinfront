import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {
  }


  formatDate(d: any) {
    let date = new Date(d)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return year + "-" + (month > 9 ? month : "0" + month) + "-" + (day > 9 ? day : "0" + day)
  }


}
