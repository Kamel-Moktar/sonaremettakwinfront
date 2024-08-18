import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HotelService} from "../../../services/hotel/hotel.service";

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent {


  title: String = "Nouveau  Hotel";


  formGroup: FormGroup = this.fb.group({
    name: ["", Validators.required],


  })
  selectedHotel: any
  footer: any = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private hotelService: HotelService,
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {

    let hotelId = this.activateRoute.snapshot.url[1].path
    this.hotelService.getById(hotelId).subscribe(res => {
      this.selectedHotel = res
      this.formGroup = this.fb.group({
        name: [res.name, Validators.required],


      })
    })
  }




  onValidate() {
    if (this.formGroup.valid) {
      this.hotelService.add({
        name: this.formGroup.value.name,

      }).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez remplir les rebiques requis")

  }

  onCancel() {
    this.router.navigateByUrl("hotel")
  }
}

