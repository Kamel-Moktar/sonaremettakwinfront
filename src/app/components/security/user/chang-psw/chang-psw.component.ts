import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SecurityService} from "../../../../services/security/security.service";


@Component({
  selector: 'app-chang-psw',
  templateUrl: './chang-psw.component.html',
  styleUrls: ['./chang-psw.component.css']
})
export class ChangPswComponent {


  login = false;
  formGroup: FormGroup = this.fb.group({
    psw1: ["", Validators.required],
    psw2: ["", Validators.required],


  })


  constructor(
    private router: Router,
    private securityService: SecurityService,
    private fb: FormBuilder,
    private activateRote: ActivatedRoute
  ) {
  }

  onValidate() {
    let userId=this.activateRote.snapshot.url[1].path

    if (this.formGroup.value.psw1 == this.formGroup.value.psw2) {

      this.securityService.changePassword({userId: userId, password: this.formGroup.value.psw1}).subscribe(
        res => {
          this.onCancel()

        }
      )

    } else alert("Veuillez saisir un mot de passe correct ")

  }

  onCancel() {
    this.router.navigateByUrl("/")
  }
}
