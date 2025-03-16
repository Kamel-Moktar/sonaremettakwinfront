import { Component } from '@angular/core';

import {Router} from "@angular/router";
import {SecurityService} from "../../../services/security/security.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users: any[] = [];
  title: any = 'User de formation ';

  constructor(private userService: SecurityService, private router: Router) {
  }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(): void {
    this.userService.getAllUser().subscribe(
      (res:any) => {
        this.users = res
      },error => {this.userService.logout()})
  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer cet utilisateur  ?")) {

      this.userService.deleteUser(a).subscribe(() => {
        this.refresh()
      })
    }
  }
  onRinit(a: any) {
    if (confirm("Voulez vous réinitialiser le mode passe   ?")) {

      this.userService.rinitPsw(a).subscribe(() => {
        this.refresh()
      })
    }
  }

  onUpdate(a: any) {
    this.router.navigateByUrl("update-user/" + a.id)
  }

  onAddUser() {
    this.router.navigateByUrl("add-user")
  }
}

