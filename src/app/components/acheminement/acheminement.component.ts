import {Component} from '@angular/core';

import {Router} from "@angular/router";
import {AcheminementService} from "../../services/acheminement/acheminement.service";


@Component({
  selector: 'app-acheminement',
  templateUrl: './acheminement.component.html',
  styleUrls: ['./acheminement.component.css']
})
export class AcheminementComponent {
  shippingSlips?: any[];
  title: any = "Bordereau d'envoi des pièces adressées";

  constructor(public shippingSlipService: AcheminementService, private router: Router) {
  }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(): void {
    this.shippingSlipService.getAll().subscribe(
      res => {
        this.shippingSlips = res

      })


  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {
      this.shippingSlipService.delete(a).subscribe({
        next: async (response) => {
            this.refresh()
        },
        error: (err) => {
          alert(err.error.message)
        }
      })
    }
  }

  onUpdate(a: any) {
    // this.router.navigateByUrl("updateshippingSlip/" + a.id)
  }

  onAdd() {
    this.router.navigateByUrl("add-acheminement")
  }

  onDetail(a: any) {
    this.router.navigateByUrl("detail-acheminement/" + a.id)
  }

  onAccuse(a: any) {
    this.router.navigateByUrl("accuse-acheminement/" + a.id)
  }

  onAnnulerAccuse(a: any) {
    if (confirm("Voulez vous vraiment annuler l'accusé de reception de ce bordereau  ?"))
    this.shippingSlipService.accuse({
      id: a.id,
      accuse: null
    }).subscribe(() => {
      this.refresh()
    })
  }
}
