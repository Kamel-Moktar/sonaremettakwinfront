import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PriceService} from "../../services/price/price.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent {

  title: any = 'Gestion de prix';
  prices: any;
  fg: FormGroup = this.fb.group({
    des: [""],

  })

  constructor(
    private priceService: PriceService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.refresh()

  }

  refresh() {
    this.priceService.getAllParam(this.fg.value.des).subscribe(
      (res) => {//est une prog asynchrone pour éviter le blocage
        this.prices = res
      })
  }


  onUpdate(a: any) {
    this.router.navigateByUrl("update-price/" + a.id)

  }

  onDelete(a: any): void {
    if (confirm("Voulez vous vraiment supprimer la ligne    ?")) {

      this.priceService.delete(a.id).subscribe(() => {
        this.refresh()
      })
    }
  }


  onAdd() {
    this.router.navigateByUrl("add-price")
  }


  onSearch() {
    this.refresh()
  }

  onDetail(a:any) {

    this.router.navigateByUrl("formation-dispositif/"+a.id)

  }
}


