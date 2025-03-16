import {Component} from '@angular/core';
import {CustomerService} from "../../services/customer/customer.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customers: any[] = [];
  title: any = 'Client';

  fg: FormGroup = this.fb.group({
    name: [""],
    shortName: [""],
  })

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private fb :FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.refresh()

  }

  refresh(): void {

    this.customerService.getAllParam({name:this.fg.value.name,shortName:this.fg.value.shortName}).subscribe(
      (res:any)=> {
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

    this.router.navigateByUrl("updatecustomer/" + a.id)
  }

  onAddCustomer() {

    this.router.navigateByUrl("addcustomer")


  }

  onSearch() {
    this.refresh()
  }
}
