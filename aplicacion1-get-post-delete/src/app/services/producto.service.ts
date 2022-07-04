
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../../app/body/modelos/Medico';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }
  getAll() : Observable<any> {
    return this.http.get<any>("http://localhost:3000/mysql-api/");
  }
  put(medico: Medico) : Observable<any> {
    return this.http.put<any>("http://localhost:3000/mysql-api/medico/"+medico.id,medico);
  }
  post(medico: Medico) : Observable<any> {
    return this.http.post<any>("http://localhost:3000/mysql-api/medico/",medico);
  }
  delete(id: number) : Observable<any> {
    return this.http.delete<any>("http://localhost:3000/mysql-api/"+id);
  }
}
