import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InscriptionService} from "../../../../services/inscription/inscription.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as JSPDF from "jspdf";
import html2canvas from "html2canvas";


@Component({
  selector: 'app-attestation',
  templateUrl: './attestation.component.html',
  styleUrls: ['./attestation.component.css']
})


export class AttestationComponent {
  @Input() inscription: any;
  @Output() canvas=new EventEmitter<any>();

  title: any = "Attestation";
  back: any = "/assets/print-styl/attestation.css"
  edition = new Date()
  eng: any = "/DG/DPRD/AF/2025"
  imgData:any
  constructor(private inscriptionService: InscriptionService,
              private  router: Router,
              private activateRoute: ActivatedRoute
  ) {




  }
  onCancel() {
    this.router.navigateByUrl("inscription/" + this.inscription.session.id)
  }

  ngAfterViewInit(): void{
    let data = document.getElementById(this.inscription.id);
    if (data) {
      html2canvas(data, {scale: 5}).then(canvas => {
        let componentWidth = 29.7
        let componentHeight = 21
        const orientation = componentWidth >= componentHeight ? 'l' : 'p'
        this.imgData = canvas.toDataURL('image/jpeg', 1.0);
        this.canvas.emit({img:this.imgData,ins:this.inscription});
      });
    }
  }





  public downloadPDF() {
    let data = document.getElementById(this.inscription.id);
    if (data) {
      html2canvas(data, {scale: 5}).then(canvas => {
        let componentWidth = 29.7
        let componentHeight = 21
        const orientation = componentWidth >= componentHeight ? 'l' : 'p'
        let pdf = new JSPDF.jsPDF('landscape', 'cm', 'a4');
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        pdf.internal.pageSize.width = componentWidth
        pdf.internal.pageSize.height = componentHeight
        pdf.addImage(imgData, 'jpeg', 0, 0, componentWidth, componentHeight)
        pdf.save('download.pdf')
      });
    }
  }


}
