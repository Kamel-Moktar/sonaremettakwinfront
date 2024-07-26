import { Component } from '@angular/core';
import {ActionService} from "../../services/action/action.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {

  title: any = 'Action de formation';
  actions: any;

  constructor(private actionService:ActionService, private router: Router) {
  }

  ngOnInit():void {
    this.refresh()

  }

  refresh() {
    this.actionService.getAll().subscribe(
      (res)=>{//est une prog asynchrone pour éviter le blocage
        this.actions=res


        //  console.log(res)
      })

  }



  onUpdate(a:any) {
    this.router.navigateByUrl("update-action/"+a.id)

  }

  onDelete(a:any):void {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {

      this.actionService.delete(a).subscribe(() => {
        this.refresh()
      })
    }
  }



  onAdd() {
    this.router.navigateByUrl("add-action")
  }


}

