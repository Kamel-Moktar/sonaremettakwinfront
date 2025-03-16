import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DomaineService} from "../../../services/domaine/domaine.service";

@Component({
  selector: 'app-update-domaine',
  templateUrl: './update-domaine.component.html',
  styleUrls: ['./update-domaine.component.css']
})
export class UpdateDomaineComponent {
  title: String = "Modifier Client ";
  domine :any

  formGroup: FormGroup = this.fb.group({
    name: ["", Validators.required],
    color:[]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private domaineService: DomaineService,
    private activateRoute: ActivatedRoute
  ) {
  }

  footer: any = "";


  ngOnInit() {

    const id = this.activateRoute.snapshot.url[1]

    this.domaineService.getById(id).subscribe((res:any) => {
      this.domine=res
      this.formGroup = this.fb.group({
        id: [res.id, Validators.required],
        name: [res.name, Validators.required],
        color: [res.color]
      })

    })


  }


  onValidate() {



    this.domaineService.add({
      id: this.domine.id,
      name: this.formGroup.value.name,
      color: this.formGroup.value.color,

    }).subscribe(() => {
        this.onCancel();
      }
    )


  }

  onCancel() {
    this.router.navigateByUrl("domaine")
  }
}


