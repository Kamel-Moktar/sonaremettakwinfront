import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SecurityService} from "../../../../services/security/security.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  title: String = "Modifier  utilisateur ";


  footer: any = "";
  active: any[]=[{val:'Oui'}, {val:'Non'}];

  user: any
  formGroup: FormGroup = this.fb.group({
    name: ["", Validators.required],
    email:["", Validators.required],
    active:["Oui", Validators.required],
    role:[ Validators.required]

  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SecurityService, private activateRoute: ActivatedRoute
  ) {
  }

roles:any


  ngOnInit() {
    let userId = this.activateRoute.snapshot.url[1];
    this.service.getAllRole().subscribe((res:any)=>{
      this.roles=res
    })
    this.service.getUserById(userId).subscribe((res: any) => {
      this.user = res

      this.formGroup = this.fb.group({
        name: [res.name, Validators.required],
        email: [res.email, Validators.required],
        active:[res.active, Validators.required],
        role:[res.role ,Validators.required]

      })
    })

  }



  selectedRole :any
  onValidate() {
    const v = this.formGroup.value.role;
    this.roles.forEach((u:any) => {

      if (u.role==v) this.selectedRole = u
    })

    if (this.formGroup.valid) {
      this.service.updateUser({
        id: this.user.id,
        name: this.formGroup.value.name,
        email: this.formGroup.value.email,
        active:this.formGroup.value.active,
        roles:[{id:this.selectedRole.id,role:this.selectedRole.role}],
      }).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez remplir les rebiques requis")

  }

  onCancel() {
    this.router.navigateByUrl("user")
  }
}


