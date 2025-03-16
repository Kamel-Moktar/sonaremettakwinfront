import {Component} from '@angular/core';
import {PhaseService} from "../../services/phase/phase.service";
import {UtilsService} from "../../services/utils/utils.service";
import * as XLSX from "xlsx";


@Component({
  selector: 'app-chronogramme',
  templateUrl: './chronogramme.component.html',
  styleUrls: ['./chronogramme.component.css']
})

export class ChronogrammeComponent {
  title = "Chronogramme";
  periode: any = []
  choronogrammeRows :any[]=[]

  position=0
  constructor( private phaseService :PhaseService,
               public  utils:UtilsService) {
    let date=new Date()
    this.periodeConstruction(date);
  }

  periodeConstruction(d: any) {
    this.periode=[]
    for (let i = 27; i >= 0; i--) {
      let date2: Date = new Date()
      date2.setMonth(d.getMonth())
      date2.setFullYear(d.getFullYear())
      date2.setDate(d.getDate() - i)
      let t = 'week'
      if (date2.getDay() === 5 || date2.getDay() === 6) t = 'weekEnd'
      this.periode.push({day: date2, type: t})
    }

    this.onShow()
  }


  onAddWeek() {
    let date=new Date()
    this.position=this.position+7
    date.setDate(date.getDate()+this.position)
    this.periodeConstruction(date)
  }

  onDelletWeek() {
    let date=new Date()
    this.position=this.position-7
    date.setDate(date.getDate()+this.position)
    this.periodeConstruction(date)
  }

  onShow() {
    this.phaseService.getChronogramme({d:this.periode[0].day,f:this.periode[this.periode.length-1].day}).subscribe(
      (res:any)=>{
        this.choronogrammeRows=res.chronogrammeRows;

    })
  }

  openExportList() {
    let element = document.getElementById('listeTable');
    const ws = XLSX.utils.table_to_sheet(element);




      ws["A1"].s = { fill: { fgColor: { rgb: "7A7A7A" } }, font: { color: { rgb: "FFFFFF" } } }

      console.log(ws["A1"])


    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Liste");
    const filename = "Chronogramme.xlsx";
    XLSX.writeFile(wb, filename);
  }

}
