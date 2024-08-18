import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionService} from "../../../services/session/session.service";
import {ActionService} from "../../../services/action/action.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UtilsService} from "../../../services/utils/utils.service";
import {ReservationService} from "../../../services/reservation/reservation.service";

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent {


  title: String = "Nouvelle Session de formation ";


  formGroup: FormGroup = this.fb.group({
    dd: ["", Validators.required],
    df: ["", Validators.required],
    roomType: [12, Validators.required]


  })


  footer: any = "";
  selected: any;
  roomType: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private utils: UtilsService,
    private reservationService :ReservationService
  ) {


  }

  ngOnInit() {
    let reservationId = this.activateRoute.snapshot.url[1].path
    this.reservationService.getById(reservationId).subscribe(res => {
      this.selected = res
      this.formGroup = this.fb.group({
        dd: [this.utils.formatDate(this.selected.arriveDate), Validators.required],
        df: [this.utils.formatDate(this.selected.leavingDate), Validators.required],
        roomType: [this.selected.roomType, Validators.required]
      })
    })
    this.reservationService.getRoomType().subscribe(res=>{
      this.roomType=res
    })
  }

  onValidate() {
    if (this.formGroup.valid) {
      if (this.formGroup.value.df >= this.formGroup.value.dd) {
        this.reservationService.update({
          id:this.selected.id,
          inscription:this.selected.inscription,
          hotel:this.selected.hotel,
          arriveDate: this.formGroup.value.dd,
          leavingDate: this.formGroup.value.df,
          roomType: this.formGroup.value.roomType
        }).subscribe((res) => {

         if(!res) alert("Stagiaire déjà affecter durant cet période !")
         else   this.onCancel();
          }
        )
      } else alert("La date début est supérieure à la date fin ")
    } else alert("Veuillez remplir les rebiques requis")
  }

  onCancel() {
    this.router.navigateByUrl("detail-reservation/"+this.selected.inscription.id)
  }






}


