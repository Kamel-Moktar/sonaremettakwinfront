import { Component } from '@angular/core';
import {ProformaService} from "../../services/proforma/proforma.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-proforma',
  templateUrl: './proforma.component.html',
  styleUrls: ['./proforma.component.css']
})
export class ProformaComponent {

  proformas?: any[];
  title: any = 'Facture proforma';

  constructor(public proformaService: ProformaService, private router: Router) {
  }

  ngOnInit(): void {


    this.refresh()
  }

  refresh(): void {
    this.proformaService.getAll().subscribe(
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
}
