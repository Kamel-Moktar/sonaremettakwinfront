import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HotelService} from "../../../services/hotel/hotel.service";

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent {


  title: String = "Nouveau  Hotel";


  formGroup: FormGroup = this.fb.group({
    name: ["", Validators.required],


  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private hotelService: HotelService
  ) {
  }

  footer: any = "";


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

