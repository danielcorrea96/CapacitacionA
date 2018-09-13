import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CrudserviceService {
    private url = 'http://cruduser.us-east-2.elasticbeanstalk.com';
  constructor( private http: HttpClient) { }

  postUser( user: any ): Observable<any> {
    return this.http.post(this.url + '/user', user);
  }

  putUser(actualizar: any): Observable<any> {
  return this.http.put(this.url + '/user', actualizar);
  }

  getUsuarios(): Observable<any> {
    return this.http.get(this.url + '/user');
  }

  deleteUsuarios( id: string): Observable<any> {
    return this.http.delete(this.url + '/user/' + id);

  }

  getUsuario( id: string): Observable<any> {
  return this.http.get(this.url + '/user/' +  id );
  }
}
