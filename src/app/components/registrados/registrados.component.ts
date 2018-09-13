import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../../service/crudservice.service';

@Component({
  selector: 'app-registrados',
  templateUrl: './registrados.component.html',
  styleUrls: ['./registrados.component.css']
})
export class RegistradosComponent implements OnInit {
  usurios: any = [];

  constructor( private service: CrudserviceService) {
    this.allUsurios();
  }

  ngOnInit() {
  }
  allUsurios() {
    this.service.getUsuarios().subscribe( data => {
      console.log ( data );
      this.usurios = data;
      console.log( data );
    });
   }

   borrar( key: string ) {
     this.service.deleteUsuarios(key).subscribe( data => {
    console.log( data );
    this.allUsurios();
  });
     // Actualizamos todo!
   }
  }
