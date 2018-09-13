import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudserviceService } from '../../service/crudservice.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-actu-usuario',
  templateUrl: './actu-usuario.component.html',
  styleUrls: ['./actu-usuario.component.css']
})
export class ActuUsuarioComponent implements OnInit {
  public form: FormGroup;
  public message = '';
  public id = '';
  public deshabilitar = true;
  constructor(
    private fB: FormBuilder,
    private service: CrudserviceService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._route.params.forEach( (params: Params) => { // Para capturar que tengo en el URL.
      this.id = params['id'];
      });
    this.createForm();
   }

  ngOnInit() {

  }

  createForm() {
    this.form = this.fB.group({
      id: [ this.id  ,  Validators.compose( [
        Validators.required,
        Validators.maxLength(8),
      ])],
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email]
      )],
      phone: ['', Validators.required],
      photoName: ['', Validators.required]
    });
    }

    actualizando() {
      this.service.putUser(this.form.value).subscribe(
        response => {
        console.log ( response );
        this.message = 'usuario Actualizado';
        }, error => {
          this.message = 'error';
        });
    }

}
