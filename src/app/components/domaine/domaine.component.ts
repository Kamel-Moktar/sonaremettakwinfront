import { Component } from '@angular/core';
import {DomaineService} from "../../services/domaine/domaine.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.css']
})
export class DomaineComponent {
  domaines: any[]=[];
  title: any = 'Domaine de formation ';

  constructor(private domaineService: DomaineService, private router: Router) {
  }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(): void {
    this.domaineService.getAll().subscribe(
      res => {
        this.domaines = res
        // console.log(res)
      })
  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {

      this.domaineService.delete(a).subscribe(() => {
        this.refresh()
      })
    }
  }


  onUpdate(a: any) {
    this.router.navigateByUrl("update-domaine/"+a.id)
  }

  onAddDomaine() {
    this.router.navigateByUrl("add-domaine")
  }
}

