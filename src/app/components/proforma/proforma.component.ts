import { Component } from '@angular/core';
import {ProformaService} from "../../services/proforma/proforma.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-proforma',
  templateUrl: './proforma.component.html',
  styleUrls: ['./proforma.component.css']
})
export class ProformaComponent {

  proformas?: any[];
  title: any = 'Facture proforma'

  formGroup: any = this.fb.group({
    number: [""],
    shortName: [""],
    date: [""]
  });

  constructor(
    public proformaService: ProformaService,
    private router: Router,
    private fb:FormBuilder
  ) {
  }

  ngOnInit(): void {


    this.refresh()
  }

  refresh(): void {
    this.proformaService.getAllParam({number: this.formGroup.value.number, shortName: this.formGroup.value.shortName, date:this.formGroup.value.date}).subscribe(
      res => {
        this.proformas = res
      })
  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {

      this.proformaService.delete(a).subscribe(() => {
        this.refresh()
      })
    }
  }


  onUpdate(a: any) {
    this.router.navigateByUrl("update-proforma/" + a.id)
  }

  onAddProforma() {
    this.router.navigateByUrl("add-proforma")
  }

  onDetail(a: any) {
    this.router.navigateByUrl("proforma-detail/" + a.id)
  }

  onSearch() {
    this.refresh()
  }
}
