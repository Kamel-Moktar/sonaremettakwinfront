import { Component } from '@angular/core';
import {UniteMesureService} from "../../services/unite-mesure/unite-mesure.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-unite-mesure',
  templateUrl: './unite-mesure.component.html',
  styleUrls: ['./unite-mesure.component.css']
})
export class UniteMesureComponent {
  title: any="Unite de mesure";
  uniteMesures: any[]=[];
  formGroup: any=this.fb.group(
    {
      name:[""]
    }
  ) ;
  constructor(private uniteMesureService:UniteMesureService,private  router : Router,private fb:FormBuilder) {

  }
  ngOnInit(){//demarrage de page web
    this.refreche('*');

  }
  refreche(name :any){
    this.uniteMesureService.getAll(name).subscribe((res:any)=>{//est une prog asynchrone pour éviter le blocage
    this.uniteMesures=res
  })

  }



  onUpdate(a:any) {
    this.router.navigateByUrl("updateunitemesure/"+a.id)


  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer ce Client  ?")) {

      this.uniteMesureService.delete(a).subscribe(() => {
        this.refreche('*')
      })
    }
  }


  onAddUnitMesure() {
   this.router.navigateByUrl("addunitemesure")
  }

  onShearch() {

   let name=this.formGroup.value.name
    if(name=='')name='*'
    this.refreche(name)
  }
}
