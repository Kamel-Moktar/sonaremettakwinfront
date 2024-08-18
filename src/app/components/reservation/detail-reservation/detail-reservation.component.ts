import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InscriptionService} from "../../../services/inscription/inscription.service";
import {HotelService} from "../../../services/hotel/hotel.service";
import {ReservationService} from "../../../services/reservation/reservation.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DatePipe} from "@angular/common";
import {UtilsService} from "../../../services/utils/utils.service";

@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.css']
})
export class DetailReservationComponent {

  selectedInscription: any
  title: any = "Detail des reservations d'hotel de :";
  reservations: any;

  hotels: any[] = []
  roomType: any[] = []
  private selectedHotel: any;
  private closeResult = "";

  constructor(private  activateRout: ActivatedRoute,
              private inscriptionService: InscriptionService,
              private hotelService: HotelService,
              private reservationService: ReservationService,
              private modalService: NgbModal,
              private fb: FormBuilder,
              private datePipe: DatePipe,
              private util: UtilsService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    let inscriptionId = this.activateRout.snapshot.url[1].path

    this.inscriptionService.getById(inscriptionId).subscribe(res => {
      this.selectedInscription = res
         this.refresh()
      this.hotelService.getAll().subscribe(h => {
        this.hotels = []
        h.forEach((e: any) => {
          this.hotels.push({
            hotel: e,
            fg: this.fb.group({
              du: [this.util.formatDate(this.selectedInscription.session.startDate), Validators.required],
              au: [this.util.formatDate(this.selectedInscription.session.endDate), Validators.required],
              roomType: ["DOUBLE", Validators.required]
            })
          })
        })

      })

    })


    this.reservationService.getRoomType().subscribe(rt => {
      this.roomType = rt
    })

  }
refresh(){
  this.reservationService.getAllByStagiaire(this.selectedInscription.id).subscribe(book=>{
    this.reservations=book


  })
}

  onAdd() {

  }

  onUpdate(a: any) {
   this.router.navigateByUrl("update-reservation/"+a.id)
  }

  onDelete(a: any) {

    if(confirm("Voulez vous vraiment supprimer cet reservation ? "))
    this.reservationService.delete(a).subscribe( ()=>{
      this.refresh()
    })
  }

  onSearchStagiaire() {

  }

  openModal(content: any) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: "lg"}).result.then((result) => {
      this.selectedHotel = result.hotel;
      this.reservationService.add({
        inscription: this.selectedInscription,
        hotel:this.selectedHotel,
        arriveDate:result.fg.value.du,
        leavingDate:result.fg.value.au,
        roomType:result.fg.value.roomType

      }).subscribe( res=>{
        if(res)
        this.refresh()
        else alert("Stagiaire déjà affecter durant cet période !")
      } )
    }, (reason) => {
      this.closeResult = `Dismissed ${DetailReservationComponent.getDismissReason(reason)}`;
    });
  }

  static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  retoure() {
 this.router.navigateByUrl("reservation/"+this.selectedInscription.session.id)
  }
}
