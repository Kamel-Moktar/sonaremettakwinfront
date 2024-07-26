import { Component } from '@angular/core';
import {ActionService} from "../../services/action/action.service";
import {Router} from "@angular/router";
import {SessionService} from "../../services/session/session.service";

@Component({
  selector: 'app-session',
  templateUrl:'./session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {

  title: any = 'Session de formation (Planification des session de formation) '
  sessions: any;

  constructor(private sessionService:SessionService, private router: Router) {
  }

  ngOnInit():void {
    this.refresh()

  }

  refresh() {
    this.sessionService.getAll().subscribe(
      (res)=>{//est une prog asynchrone pour éviter le blocage
        this.sessions=res

      })

  }



  onUpdate(a:any) {
    this.router.navigateByUrl("update-session/"+a.id)

  }

  onDelete(a:any):void {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {

      this.sessionService.delete(a).subscribe(() => {
        this.refresh()
      })
    }
  }



  onAdd() {
    this.router.navigateByUrl("add-session")
  }


}


