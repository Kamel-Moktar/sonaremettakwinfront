import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SecurityService} from "../../../../services/security/security.service";


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  title: String = "Nouveau utilisateur ";
  active: any[]=[{val:'Oui'}, {val:'Non'}];
  roles: any[]=[];
  footer: any = "";
  formGroup: FormGroup = this.fb.group({
    name: ["", Validators.required],
    email:["", Validators.required],
    active:["Oui", Validators.required],
    role:[ Validators.required]

  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SecurityService
  ) {
  }

ngOnInit(){

    this.service.getAllRole().subscribe((res:any)=>{
      this.roles=res
    })
}

selectedRole:any
  onValidate() {
    const v = this.formGroup.value.role;
    this.roles.forEach(u => {
      if (u.role==v) this.selectedRole = u
    })

    if (this.formGroup.valid) {
      this.service.addUser({
        name: this.formGroup.value.name,
        email:this.formGroup.value.email,
        active:this.formGroup.value.active,
        roles:[{id:this.selectedRole.id,role:this.selectedRole.name}],
        password: Math.floor(Math.random()*10000)
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

