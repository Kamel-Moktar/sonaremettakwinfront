import { Component } from '@angular/core';
import {ModuleService} from "../../services/module/module.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {

  modules: any[] = [];
  title: any = 'Module ';
  fg: FormGroup = this.fb.group({
    name: [""],
    domaine: [""]
  })

  constructor(private fb: FormBuilder,private moduleService: ModuleService , private router: Router) {
  }

  ngOnInit(): void {
    this.refresh('','')
  }

  refresh(name:any, domaineName:any): void {
    this.moduleService.getAll(name,domaineName).subscribe(
      res => {
        this.modules = res
        // console.log(res)
      })
  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer ce Module  ?")) {

      this.moduleService.delete(a).subscribe(() => {
        this.refresh(this.fg.value.name,this.fg.value.domaine)
      })
    }
  }


  onUpdate(a: any) {
    this.router.navigateByUrl("update-module/" + a.id)
  }

  onAdd() {
    this.router.navigateByUrl("add-module")
  }

  onSearch() {
   this.refresh(this.fg.value.name,this.fg.value.domaine)
  }
}


