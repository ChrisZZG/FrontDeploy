import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  URL = environment.URL + 'habilidades/';

  constructor(private httpCliente: HttpClient) { }

  public list(): Observable<Habilidades[]> {
    return this.httpCliente.get<Habilidades[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Habilidades> {
    return this.httpCliente.get<Habilidades>(this.URL + `detail/${id}`);
  }

  public save(habilidad: Habilidades): Observable<any> {
    return this.httpCliente.post<any>(this.URL + 'create', habilidad);
  }

  public update(id: number, habilidad: Habilidades): Observable<any> {
    return this.httpCliente.put<any>(this.URL + `update/${id}`, habilidad);
  }

  public delete(id: number): Observable<any> {
    return this.httpCliente.delete<any>(this.URL + `delete/${id}`);
  }
}
