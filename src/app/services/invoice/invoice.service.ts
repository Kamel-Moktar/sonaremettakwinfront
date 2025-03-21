import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {DatePipe} from "@angular/common";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  baseUrl: any = environment.backendBaseUrl + "/invoice"
option:any ={
  headers: new HttpHeaders({"Authorization": "Bearer " + this.securityService.loadToken()})
}
  constructor(private http: HttpClient,private securityService :SecurityService) {
  }

  public getAll() {
    let url = this.baseUrl + "/all"
    return this.http.get<any[]>(url, this.option)
  }

  public getDebts() {
    let url = this.baseUrl + "/debts"
    return this.http.get<any[]>(url, this.option)
  }

  public getDebtsParam(param: any) {
    let url = this.baseUrl + "/debtsparam"
    return this.http.post<any[]>(url, param, this.option)
  }

  public getAllParam(param: any) {
    let url = this.baseUrl + "/allparam"
    return this.http.post<any[]>(url, param, this.option)
  }

  public getTurnover(param: any) {
    let url = this.baseUrl + "/turnover"
    return this.http.post<any[]>(url, param, this.option)
  }

  public getUnpaidInvoice(searchParm: any) {
    let url = this.baseUrl + "/unpaidinvoice"
    return this.http.post<any[]>(url, searchParm, this.option)
  }


  public add(invoice: any) {
    let url = this.baseUrl + "/add"
    return this.http.post(url, invoice,this.option)

  }

  public delete(invoice: any) {
    let url = this.baseUrl + "/delete"
    return this.http.post(url, invoice,this.option)
  }

  public update(invoice: any) {
    let url = this.baseUrl + "/update"
    return this.http.post(url, invoice, this.option)
  }


  getInvoiceById(invoiceId: any) {
    let url = this.baseUrl + "/byid/" + invoiceId
    return this.http.get<any>(url, this.option)

  }

  formatInvoiceNumber(invoice: any) {
    let invoiceNmber = ""
    let datePipe = new DatePipe("EN-en")
    let year = datePipe.transform(invoice.date, "yyyy")
    if (invoice.number < 10) return "000" + invoice.number + "/" + year
    if (invoice.number < 100) return "00" + invoice.number + "/" + year
    if (invoice.number < 1000) return "0" + invoice.number + "/" + year
    return invoice.number + "/" + year


  }

  unite(nombre: any) {
    let unite: any
    switch (nombre) {
      case 0:
        unite = 'zéro';
        break;
      case 1:
        unite = 'un';
        break;
      case 2:
        unite = 'deux';
        break;
      case 3:
        unite = 'trois';
        break;
      case 4:
        unite = 'quatre';
        break;
      case 5:
        unite = 'cinq';
        break;
      case 6:
        unite = 'six';
        break;
      case 7:
        unite = 'sept';
        break;
      case 8:
        unite = 'huit';
        break;
      case 9:
        unite = 'neuf';
        break;
    }
    return unite;
  }

  dizaine(nombre: any) {
    let dizaine = ""
    switch (nombre) {
      case 10:
        dizaine = 'dix';
        break;
      case 11:
        dizaine = 'onze';
        break;
      case 12:
        dizaine = 'douze';
        break;
      case 13:
        dizaine = 'treize';
        break;
      case 14:
        dizaine = 'quatorze';
        break;
      case 15:
        dizaine = 'quinze';
        break;
      case 16:
        dizaine = 'seize';
        break;
      case 17:
        dizaine = 'dix-sept';
        break;
      case 18:
        dizaine = 'dix-huit';
        break;
      case 19:
        dizaine = 'dix-neuf';
        break;
      case 20:
        dizaine = 'vingt';
        break;
      case 30:
        dizaine = 'trente';
        break;
      case 40:
        dizaine = 'quarante';
        break;
      case 50:
        dizaine = 'cinquante';
        break;
      case 60:
        dizaine = 'soixante';
        break;
      case 70:
        dizaine = 'soixante-dix';
        break;
      case 80:
        dizaine = 'quatre-vingt';
        break;
      case 90:
        dizaine = 'quatre-vingt-dix';
        break;
    }
    return dizaine;
  }

  numberToLetter(nombre: any) {
    var i, j, n, quotient, reste, nb;
    var ch;
    var numberToLetter = '';

    if (nombre.toString().replace(/ /gi, '').length > 15) return 'dépassement de capacité';
    if (isNaN(nombre.toString().replace(/ /gi, ''))) return 'Nombre non valide';

    nb = parseFloat(nombre.toString().replace(/ /gi, ''));
    if (Math.ceil(nb) != nb) return 'Nombre avec virgule non géré.';

    n = nb.toString().length;
    switch (n) {
      case 1:
        numberToLetter = this.unite(nb);
        break;
      case 2:
        if (nb > 19) {
          quotient = Math.floor(nb / 10);
          reste = nb % 10;
          if (nb < 71 || (nb > 79 && nb < 91)) {
            if (reste == 0) numberToLetter = this.dizaine(quotient * 10);
            if (reste == 1) numberToLetter = this.dizaine(quotient * 10) + '-et-' + this.unite(reste);
            if (reste > 1) numberToLetter = this.dizaine(quotient * 10) + '-' + this.unite(reste);
          } else numberToLetter = this.dizaine((quotient - 1) * 10) + '-' + this.dizaine(10 + reste);
        } else numberToLetter = this.dizaine(nb);
        break;
      case 3:
        quotient = Math.floor(nb / 100);
        reste = nb % 100;
        if (quotient == 1 && reste == 0) numberToLetter = 'cent';
        if (quotient == 1 && reste != 0) numberToLetter = 'cent' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = this.unite(quotient) + ' cents';
        if (quotient > 1 && reste != 0)
          numberToLetter = this.unite(quotient) + ' cent ' + this.numberToLetter(reste);
        break;
      case 4:
        quotient = Math.floor(nb / 1000);
        reste = nb - quotient * 1000;
        if (quotient == 1 && reste == 0) numberToLetter = 'mille';
        if (quotient == 1 && reste != 0) numberToLetter = 'mille' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = this.numberToLetter(quotient) + ' mille';
        if (quotient > 1 && reste != 0)
          numberToLetter = this.numberToLetter(quotient) + ' mille ' + this.numberToLetter(reste);
        break;
      case 5:
        quotient = Math.floor(nb / 1000);
        reste = nb - quotient * 1000;
        if (quotient == 1 && reste == 0) numberToLetter = 'mille';
        if (quotient == 1 && reste != 0) numberToLetter = 'mille' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = this.numberToLetter(quotient) + ' mille';
        if (quotient > 1 && reste != 0)
          numberToLetter = this.numberToLetter(quotient) + ' mille ' + this.numberToLetter(reste);
        break;
      case 6:
        quotient = Math.floor(nb / 1000);
        reste = nb - quotient * 1000;
        if (quotient == 1 && reste == 0) numberToLetter = 'mille';
        if (quotient == 1 && reste != 0) numberToLetter = 'mille' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = this.numberToLetter(quotient) + ' mille';
        if (quotient > 1 && reste != 0)
          numberToLetter = this.numberToLetter(quotient) + ' mille ' + this.numberToLetter(reste);
        break;
      case 7:
        quotient = Math.floor(nb / 1000000);
        reste = nb % 1000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'un million';
        if (quotient == 1 && reste != 0) numberToLetter = 'un million' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = this.numberToLetter(quotient) + ' millions';
        if (quotient > 1 && reste != 0)
          numberToLetter = this.numberToLetter(quotient) + ' millions ' + this.numberToLetter(reste);
        break;
      case 8:
        quotient = Math.floor(nb / 1000000);
        reste = nb % 1000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'un million';
        if (quotient == 1 && reste != 0) numberToLetter = 'un million' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = this.numberToLetter(quotient) + ' millions';
        if (quotient > 1 && reste != 0)
          numberToLetter = this.numberToLetter(quotient) + ' millions ' + this.numberToLetter(reste);
        break;
      case 9:
        quotient = Math.floor(nb / 1000000);
        reste = nb % 1000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'un million';
        if (quotient == 1 && reste != 0) numberToLetter = 'un million' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = this.numberToLetter(quotient) + ' millions';
        if (quotient > 1 && reste != 0)
          numberToLetter = this.numberToLetter(quotient) + ' millions ' + this.numberToLetter(reste);
        break;
      case 10:
        quotient = Math.floor(nb / 1000000000);
        reste = nb - quotient * 1000000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'un milliard';
        if (quotient == 1 && reste != 0) numberToLetter = 'un milliard' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = this.numberToLetter(quotient) + ' milliards';
        if (quotient > 1 && reste != 0)
          numberToLetter = this.numberToLetter(quotient) + ' milliards ' + this.numberToLetter(reste);
        break;
      case 11:
        quotient = Math.floor(nb / 1000000000);
        reste = nb - quotient * 1000000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'un milliard';
        if (quotient == 1 && reste != 0) numberToLetter = 'un milliard' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = this.numberToLetter(quotient) + ' milliards';
        if (quotient > 1 && reste != 0)
          numberToLetter = this.numberToLetter(quotient) + ' milliards ' + this.numberToLetter(reste);
        break;
      case 12:
        quotient = Math.floor(nb / 1000000000);
        reste = nb - quotient * 1000000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'un milliard';
        if (quotient == 1 && reste != 0) numberToLetter = 'un milliard' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = this.numberToLetter(quotient) + ' milliards';
        if (quotient > 1 && reste != 0)
          numberToLetter = this.numberToLetter(quotient) + ' milliards ' + this.numberToLetter(reste);
        break;
      case 13:
        quotient = Math.floor(nb / 1000000000000);
        reste = nb - quotient * 1000000000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'un billion';
        if (quotient == 1 && reste != 0) numberToLetter = 'un billion' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = this.numberToLetter(quotient) + ' billions';
        if (quotient > 1 && reste != 0)
          numberToLetter = this.numberToLetter(quotient) + ' billions ' + this.numberToLetter(reste);
        break;
      case 14:
        quotient = Math.floor(nb / 1000000000000);
        reste = nb - quotient * 1000000000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'un billion';
        if (quotient == 1 && reste != 0) numberToLetter = 'un billion' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = this.numberToLetter(quotient) + ' billions';
        if (quotient > 1 && reste != 0)
          numberToLetter = this.numberToLetter(quotient) + ' billions ' + this.numberToLetter(reste);
        break;
      case 15:
        quotient = Math.floor(nb / 1000000000000);
        reste = nb - quotient * 1000000000000;
        if (quotient == 1 && reste == 0) numberToLetter = 'un billion';
        if (quotient == 1 && reste != 0) numberToLetter = 'un billion' + ' ' + this.numberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = this.numberToLetter(quotient) + ' billions';
        if (quotient > 1 && reste != 0)
          numberToLetter = this.numberToLetter(quotient) + ' billions ' + this.numberToLetter(reste);
        break;
    }
    if (
      numberToLetter.slice(numberToLetter.length - 'quatre-vingt'.length, 'quatre-vingt'.length) ==
      'quatre-vingt'
    )
      numberToLetter = numberToLetter + 's';

    return numberToLetter;
  }


}
