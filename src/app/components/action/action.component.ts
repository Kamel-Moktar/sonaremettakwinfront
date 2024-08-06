import {Component} from '@angular/core';
import {ActionService} from "../../services/action/action.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {

  title: any = 'Action de formation';
  actions: any;
  fg: FormGroup = this.fb.group({
    name: [""],
    domaine: [""]
  })

  constructor(
    private actionService: ActionService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.refresh()

  }

  refresh() {
    this.actionService.getAllParam({name: this.fg.value.name, domainName: this.fg.value.domaine}).subscribe(
      (res) => {//est une prog asynchrone pour éviter le blocage
        this.actions = res


        //  console.log(res)
      })

  }


  onUpdate(a: any) {
    this.router.navigateByUrl("update-action/" + a.id)

  }

  onDelete(a: any): void {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {

      this.actionService.delete(a).subscribe(() => {
        this.refresh()
      })
    }
  }


  onAdd() {
    this.router.navigateByUrl("add-action")
  }


  onSearch() {
    this.refresh()
  }
}

