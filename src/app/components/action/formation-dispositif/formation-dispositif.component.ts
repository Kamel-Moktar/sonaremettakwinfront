import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, Validators} from "@angular/forms";
import {ActionService} from "../../../services/action/action.service";
import {ModuleService} from "../../../services/module/module.service";
import {FormationDispositifService} from "../../../services/formation-dispositif/formation-dispositif.service";

@Component({
  selector: 'app-formation-dispositif',
  templateUrl: './formation-dispositif.component.html',
  styleUrls: ['./formation-dispositif.component.css']
})
export class FormationDispositifComponent {

  closeResult = ""
  title: any = "Modules de l'action : ";
  lignes: any[] = [];
  modules: any[] = [];
  actionId: any = 0;
  selectedAction: any
  selectedModule: any
  formGroup: any = this.fb.group({
    module: [''],
    domaine: [''],
  });


  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              public moduleService: ModuleService,
              private formationDispositifService: FormationDispositifService,
              public actionService: ActionService,
              private modalService: NgbModal,
              private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.actionId = this.activateRoute.snapshot.url[1].path
    this.refresh()

  }

  refresh() {
    this.actionService.getById(this.actionId).subscribe(
      (res) => {
        this.selectedAction = res
        this.formationDispositifService.getByAction(this.actionId).subscribe(
          (ls:any) => {
            this.lignes = ls
          })
      })
    this.refreshModules()
  }

  static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openInvoiceModal(content: any) {

    this.formGroup = this.fb.group({
      module: [""],
      domaine: [""],

    });

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: "lg"}).result.then((result) => {
      this.selectedModule = result;
      this.onAdd();
    }, (reason) => {
      this.closeResult = `Dismissed ${FormationDispositifComponent.getDismissReason(reason)}`;
    });
  }





  onCancel() {
    this.router.navigateByUrl("action")
  }

  onAdd() {

    if (this.selectedModule.fg.valid) {
      if (this.selectedModule.fg.value.duree > 0) {
        let nur:number=this.selectedModule.fg.value.duree+this.totalDuree()


          this.formationDispositifService.add({
            module: this.selectedModule.module,
            action: this.selectedAction,
            durationHour : this.selectedModule.fg.value.duree
          }).subscribe(res => {
            this.refresh()
          })
      } else alert("Le la durée doit être supérieur  à 0 ")
    } else alert("Veuillez introduire  la durée")
  }

  totalDuree(){
    let total:number=0
    for(let e of this.lignes) total=total+e.durationHour
    return total
  }

  onDelete(a: any) {
    if (confirm("Voulez vous vraiment supprimer cette ligne  ?")) {
      this.formationDispositifService.delete(a).subscribe(() => {
        this.refresh()

      })
    }
  }

  onSearch() {
    this.refreshModules()
  }

  refreshModules() {
    this.moduleService.getAll(this.formGroup.value.module, this.formGroup.value.domaine).subscribe((ls:any) => {


      this.modules = []
      ls.forEach((e:any) => {
          this.modules.push({
            module: e,
            fg: this.fb.group({
              duree: [e.remains, [Validators.required, Validators.min(0)]],
              objectif: [""]
            })
          })

        }
      )
    })
  }
}



