import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilsService} from "../../../services/utils/utils.service";
import {PriceService} from "../../../services/price/price.service";

@Component({
  selector: 'app-update-price',
  templateUrl: './update-price.component.html',
  styleUrls: ['./update-price.component.css']
})
export class UpdatePriceComponent {


  title: String = "Gestion des prix ";
  footer: any = "";

  formGroup: FormGroup = this.fb.group({
    priceA: ["", Validators.required],
    priceV: ["", Validators.required],
    date: ["", Validators.required]
  })

  price: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private utils: UtilsService,
    private priceService: PriceService
  ) {
  }


  ngOnInit() {


    let priceId = this.activateRoute.snapshot.url[1].path

    this.priceService.getById(priceId).subscribe(res => {
      this.price = res

      if(res.action)this.title = "MAJ de  prix pour "+res.benefit.designation+" "+res.action.name
      if(res.hotel)this.title = "MAJ de  prix pour "+res.benefit.designation+" "+res.hotel.name
      this.formGroup = this.fb.group({
        priceA: [this.price.cout, Validators.required],
        priceV: [this.price.price, Validators.required],
        date: [this.utils.formatDate(this.price.date), Validators.required]


      })
    })
  }

  onValidate() {

    if (this.formGroup.valid) {
      this.priceService.update({
        id: this.price.id,
        benefit: this.price.benefit,
        hotels: this.price.hotel,
        actions: this.price.action,
        qte: this.formGroup.value.qte,
        cout: this.formGroup.value.priceA,
        price: this.formGroup.value.priceV,
        date: this.formGroup.value.date
      }).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez sélectionner une prestation ")
  }

  onCancel() {
    this.router.navigateByUrl("price")
  }


}


