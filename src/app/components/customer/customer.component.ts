import {Component} from '@angular/core';
import {CustomerService} from "../../services/customer/customer.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customers: any[]=[];
  title: any = 'Client';



  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
    this.refresh()

  }

  refresh(): void {

    this.customerService.getAll().subscribe(
      res => {

        this.customers = res

        // console.log(res)
      })
  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {

      this.customerService.delete(a).subscribe(() => {
        this.refresh()
      })
    }
  }


  onUpdate(a: any) {

    this.router.navigateByUrl("updatecustomer/"+a.id)
  }

  onAddCustomer() {

    this.router.navigateByUrl("addcustomer")


  }
}
