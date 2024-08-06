import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DomaineService} from "../../../services/domaine/domaine.service";

@Component({
  selector: 'app-add-domaine',
  templateUrl: './add-domaine.component.html',
  styleUrls: ['./add-domaine.component.css']
})
export class AddDomaineComponent {

  title: String = "Nouveau  Domaine";


  formGroup: FormGroup = this.fb.group({
    name: ["", Validators.required],


  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private domaineService: DomaineService
  ) {
  }

  footer: any = "";


  onValidate() {
    if (this.formGroup.valid) {
      this.domaineService.add({
        name: this.formGroup.value.name,

      }).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez remplir les rebiques requis")

  }

  onCancel() {
    this.router.navigateByUrl("domaine")
  }
}

