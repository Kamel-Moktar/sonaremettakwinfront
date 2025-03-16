import { Component } from '@angular/core';

import {Router} from "@angular/router";
import {HotelService} from "../../services/hotel/hotel.service";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

  hotels: any[] = [];
  title: any = 'Hotel ';

  constructor(private hotelService: HotelService, private router: Router) {
  }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(): void {
    this.hotelService.getAll().subscribe(
      (res:any) => {
        this.hotels = res
        // console.log(res)
      })
  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {

      this.hotelService.delete(a).subscribe(() => {
        this.refresh()
      })
    }
  }


  onUpdate(a: any) {
    this.router.navigateByUrl("update-hotel/" + a.id)
  }

  onAddHotel() {
    this.router.navigateByUrl("add-hotel")
  }
}


