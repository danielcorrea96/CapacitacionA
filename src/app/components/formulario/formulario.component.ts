import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudserviceService } from '../../service/crudservice.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
public multiplo: string;
public multiplicando: any;
public resultado: any = []; // OJO.
public form: FormGroup;
mostrar: boolean;
public message = '';
public numero: any = [];

  constructor(
    private fB: FormBuilder,
    private service: CrudserviceService
  ) {
    this.mostrar = false;
    this.createForm();
   }

  ngOnInit() {
    setInterval(() => {
      console.log( this.form );
    }, 20000);
  }

  tabla() {
  // this.multiplo = 'Tabla del 1';
  // console.log( this.numero );
  // // tslint:disable-next-line:forin
  // for ( let i = 0; i < 10; i++) {
  //   console.log( i );
  //   this.resultado[i] = this.numero * i; // OJO
  // }
  // Traemos el form de abajo.
  this.service.postUser(this.form.value).subscribe(
    response => {
      if ( response.message = 'OK') {
        this.message = 'Usuario Creado';
      } else {
        this.message = response.message;
      }
  } , error => {
  this.message = 'Oops, ocurrió un error.';
  });
  }



  createForm() {
  this.form = this.fB.group({
    id: ['', Validators.compose( [
      Validators.required,
      Validators.maxLength(8)
    ])],
    name: ['', Validators.required],
    email: ['', Validators.compose([
      Validators.required,
      Validators.email]
    )],
    phone: ['', Validators.compose([
      Validators.required
    ])],
    photoName: ['', Validators.required]
  });

  }





}
