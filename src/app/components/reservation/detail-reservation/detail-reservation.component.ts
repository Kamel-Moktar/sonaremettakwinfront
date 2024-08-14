import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InscriptionService} from "../../../services/inscription/inscription.service";
import {HotelService} from "../../../services/hotel/hotel.service";
import {ReservationService} from "../../../services/reservation/reservation.service";

@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.css']
})
export class DetailReservationComponent {

  selectedInscription:any

  constructor(private  activateRout :ActivatedRoute,
              private inscriptionService :InscriptionService,
              private hotelService :HotelService,
              private reservationService: ReservationService) {
  }

  ngOnInit(){
    let inscriptionId=this.activateRout.snapshot.url[1].path
  console.log(inscriptionId)
  this.inscriptionService.getById(inscriptionId).subscribe(res=>{
    this.selectedInscription=res
  })
}


}
