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


  compareDate(d1:any,d2 :any){


    if(d1&&d2){
    let year1 = d1.getFullYear()
    let month1 = d1.getMonth() + 1
    let day1 = d1.getDate()

    let year2 = d2.getFullYear()
    let month2 = d2.getMonth() + 1
    let day2 = d2.getDate()

    if(year1+month1+day1>year2+month2+day2) return 1
    if(year1+month1+day1==year2+month2+day2) return 0
    if(year1+month1+day1<year2+month2+day2) return -1
  }

    return -1
  }

dureOuvrable(d1:any,d2:any){
  let dd = new Date(d1)
  let df = new Date(d2)

  let duration = (df.getTime() - dd.getTime()) / (1000 * 60 * 60 * 24)


  if(duration<=6)return duration

 return  (Math.floor(duration/7))*5

}

}
