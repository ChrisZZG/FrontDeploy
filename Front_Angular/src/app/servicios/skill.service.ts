import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  URL = environment.URL + 'hys/';

  constructor(private httpCliente: HttpClient) { }

  public list(): Observable<Skill[]>{
    return this.httpCliente.get<Skill[]>(this.URL + 'lista');  
  }

  public detail(id: number): Observable<Skill>{
    return this.httpCliente.get<Skill>(this.URL + `detail/${id}`); 
  }

  public save(skill: Skill): Observable<any>{
    return this.httpCliente.post<any>(this.URL + 'create', skill); 
  }

  public update(id: number, skill: Skill): Observable<any>{
    return this.httpCliente.put<any>(this.URL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpCliente.delete<any>(this.URL + `delete/${id}`);
  }
}
