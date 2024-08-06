import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../services/session/session.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {

  title: any = 'Session de formation (Planification des session de formation) '
  sessions: any;

  fg: FormGroup = this.fb.group({
    name: [""],
    theme: [""],
    dd: [""]
  })

  constructor(private sessionService: SessionService,
              private router: Router,
              private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.refresh()

  }

  refresh() {
    this.sessionService.getAll().subscribe(
      (res) => {//est une prog asynchrone pour éviter le blocage
        this.sessions = res

      })

  }


  onUpdate(a: any) {
    this.router.navigateByUrl("update-session/" + a.id)

  }

  onDelete(a: any): void {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {

      this.sessionService.delete(a).subscribe(() => {
        this.refresh()
      })
    }
  }


  onAdd() {
    this.router.navigateByUrl("add-session")
  }


  onDetail(a: any) {
    this.router.navigateByUrl("phase/" + a.id)
  }

  onStagiaire(a: any) {
    this.router.navigateByUrl("inscription/" + a.id)
  }

  onSearch() {

    this.sessionService.getAllParam({
      name: this.fg.value.name,
      theme: this.fg.value.theme,
      date: this.fg.value.dd
    }).subscribe(res => {
      this.sessions = res
    })
  }
}


