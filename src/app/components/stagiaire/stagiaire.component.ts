import {Component} from '@angular/core';


import {Router} from "@angular/router";
import {StagiaireService} from "../../services/stagiaire/stagiaire.service";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent {

  stagiaires?: any[];
  title: any = 'Stagiaire';
  fg: FormGroup = this.fb.group(
    {
      familyName: [""],
      firstName: [""],
      birthDay: [""],
      customer: [""]

    }
  );

  constructor(public stagiaireService: StagiaireService,
              private router: Router,
              private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {


    this.refresh()
  }

  refresh(): void {
    this.stagiaireService.getParam({
      familyName: this.fg.value.familyName,
      firstName: this.fg.value.firstName,
      birthDay: this.fg.value.birthDay,
      customer: this.fg.value.customer
    }).subscribe(
      res => {
        this.stagiaires = res
      })
  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {

      this.stagiaireService.delete(a).subscribe(() => {
        this.refresh()
      })
    }
  }

  onUpdate(a: any) {
    this.router.navigateByUrl("update-stagiaire/" + a.id+"/0")
  }

  onAddStagiaire() {
    this.router.navigateByUrl("add-stagiaire/0")
  }

  onDetail(a: any) {
    this.router.navigateByUrl("detail-stagiaire/" + a.id)
  }


  onSearch() {
    this.refresh()
  }
}
