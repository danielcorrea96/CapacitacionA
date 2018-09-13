import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../../service/crudservice.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.css']
})
export class VerUsuarioComponent implements OnInit {
  usuario = { response: {} };
  public id = '';
  constructor(
    private service: CrudserviceService,
    private _route: ActivatedRoute
  ) {
    this._route.params.forEach((params: Params) => {
      // Para capturar que tengo en el URL.
      this.id = params['id'];
    });
    this.verUsuario();
  }

  ngOnInit() {}

  verUsuario() {
    this.service.getUsuario(this.id).subscribe(data => {
      this.usuario = data;
      console.log(this.usuario);
    });
  }
}
