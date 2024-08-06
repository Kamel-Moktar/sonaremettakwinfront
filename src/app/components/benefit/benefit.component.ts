import {Component} from '@angular/core';

import {Router} from "@angular/router";
import {BenefitService} from "../../services/benefit/benefit.service";


@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.css']
})
export class BenefitComponent {
  title: any = 'Prestation';
  benefits: any;

  constructor(private benefitService: BenefitService, private router: Router) {
  }

  ngOnInit(): void {
    this.refresh()

  }

  refresh() {
    this.benefitService.getAll().subscribe(
      (res) => {//est une prog asynchrone pour éviter le blocage
        this.benefits = res


        //  console.log(res)
      })

  }


  onUpdate(a: any) {
    this.router.navigateByUrl("updatbenefit/" + a.id)

  }

  onDelete(a: any): void {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {

      this.benefitService.delete(a).subscribe(() => {
        this.refresh()
      })
    }
  }


  onAddBenefit() {
    this.router.navigateByUrl("addbenefit")
  }


}
