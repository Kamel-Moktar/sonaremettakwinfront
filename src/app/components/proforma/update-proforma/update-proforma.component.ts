import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProformaService} from "../../../services/proforma/proforma.service";

@Component({
  selector: 'app-update-proforma',
  templateUrl: './update-proforma.component.html',
  styleUrls: ['./update-proforma.component.css']
})
export class UpdateProformaComponent {

  title: String = "Modifier facture proforma";

  formGroup: FormGroup = this.fb.group({
    proformaDate: ["", Validators.required],
    object: ["", Validators.required],
    reference: ["", Validators.required]
  })
  proforma: any;
  proformaId: any


  constructor(private fb: FormBuilder,
              private router: Router,
              private proformaService: ProformaService,
              private activateRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.proformaId = this.activateRoute.snapshot.url[1]
    this.proformaService.getProformaById(this.proformaId).subscribe(res => {
      this.proforma = res
      let s: String = this.proforma.date.toString()

      let year = s.slice(0, 4)
      let month = s.slice(5, 7)
      let day = s.slice(8, 10)
      let d = year + "-" + month + "-" + day


      this.formGroup = this.fb.group({
          proformaDate: [d, Validators.required],
          object: [this.proforma.object],
          reference: [this.proforma.reference]
        }
      )
    })
  }

  onValidate() {
    if (this.formGroup.valid) {
      this.proformaService.update({
        id:this.proforma.id,
        date: this.formGroup.value.proformaDate,
        object: this.formGroup.value.object,
        reference: this.formGroup.value.reference,
        customer:this.proforma.customer
      }).subscribe(() => {
          this.onCancel();
        }
      )
    } else alert("Veuillez selectionner un client ")
  }

  onCancel() {
    this.router.navigateByUrl("proforma")
  }


}

