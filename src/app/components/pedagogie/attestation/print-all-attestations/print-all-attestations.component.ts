import {Component} from '@angular/core';
import {InscriptionService} from "../../../../services/inscription/inscription.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as JSPDF from "jspdf";

@Component({
  selector: 'app-print-all-attestations',
  templateUrl: './print-all-attestations.component.html',
  styleUrls: ['./print-all-attestations.component.css']
})
export class PrintAllAttestationsComponent {


  title: any = "Attestation";
  inscriptions: any
  edition = new Date()
  eng: any = "/DG/DPRD/AF/2025"
  back: any = "/assets/print-styl/attestation.css"
  sessionId: any;
  imgData: any[] = []

  constructor(private inscriptionService: InscriptionService,
              private  router: Router,
              private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.sessionId = this.activateRoute.snapshot.url[1]
    this.inscriptionService.getAllBySession(this.sessionId).subscribe(
      (res: any) => {
        this.inscriptions = res
      })
  }


  onCancel() {
    this.router.navigateByUrl("inscription/" + this.sessionId)
  }


  public downloadPDF() {
    let componentWidth = 29.7
    let componentHeight = 21
    const orientation = componentWidth >= componentHeight ? 'l' : 'p'
    let pdf = new JSPDF.jsPDF('landscape', 'cm', 'a4');
    pdf.internal.pageSize.width = componentWidth
    pdf.internal.pageSize.height = componentHeight
    let i=this.imgData.length
    this.imgData.forEach(img => {
      let imgDat = img.img
      pdf.addImage(imgDat, 'jpeg', 0, 0, componentWidth, componentHeight)
      i=i-1
     if(i!=0) pdf.addPage('jpeg', "l")
    })

    pdf.save('attestations.pdf')
  }

  handleEvent($event: any) {
    this.imgData.push($event)
  }
}



