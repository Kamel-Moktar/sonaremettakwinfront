import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BenefitService} from "../../../services/benefit/benefit.service";
import {UtilsService} from "../../../services/utils/utils.service";
import {HotelService} from "../../../services/hotel/hotel.service";
import {ActionService} from "../../../services/action/action.service";
import {PriceService} from "../../../services/price/price.service";

@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.css']
})
export class AddPriceComponent {

  title: String = "Gestion des prix ";


  formGroup: FormGroup = this.fb.group({
    benefit: ["Enseignemnt", Validators.required],
    actions: ["1", Validators.required],
    hotels: ["1", Validators.required],
    priceA: ["", Validators.required],
    priceV: ["", Validators.required],
    date: ["", Validators.required]


  })

  footer: any = "";
  benefits: any[] = [];
  selectedBenefit: any

  actions: any[] = [];
  hotels: any[] = []
  actionSettings: any = {
    idField: 'id',
    textField: 'name',
  }
  hotelSettings: any = {
    idField: 'id',
    textField: 'name',
  }
  isEnseigment: any = true;
  enseignement = "Enseignement"

  constructor(
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private benefitService: BenefitService,
    private utils: UtilsService,
    private hotelService: HotelService,
    private actionService: ActionService,
    private priceService: PriceService
  ) {
  }


  ngOnInit() {
    this.benefitService.getAll().subscribe((res:any) => {
      this.benefits = res
      if (this.benefits.length > 0)
        this.selectedBenefit = this.benefits[0]
    })

    this.hotelService.getAll().subscribe((res:any) => {
      this.hotels = res

    })

    this.actionService.getAll().subscribe((res:any) => {
      this.actions = res
    })


    this.formGroup = this.fb.group({
      benefit:[this.enseignement, Validators.required],
      actions:[],
      hotels: [],
      priceA: ["", Validators.required],
      priceV: ["", Validators.required],
      date: [this.utils.formatDate(new Date), Validators.required]


    })

  }

  onValidate() {
    let hotels: any[] = []
    let actions: any[] = []
    if (this.selectedBenefit != null) {
      if (this.selectedBenefit.designation==this.enseignement)
        actions = this.formGroup.value.actions
      else hotels = this.formGroup.value.hotels;


      console.log(actions)
      this.priceService.add({
        benefit: this.selectedBenefit,
        hotels: hotels,
        actions: actions,
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

  customerSelected(event: any) {
    let value = event.target.value;
    this.isEnseigment = value == this.enseignement
    console.log(value)
    this.benefits.forEach(u => {
      if (u.designation === value) {
        this.selectedBenefit = u;
      }
    })
    // console.log(this.selectedCustomer)
  }


}



