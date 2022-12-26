import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  habilidad: Habilidades[] = [];

  constructor(private habilidadesS: HabilidadesService, private tokenS: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if (this.tokenS.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidad(): void {
    this.habilidadesS.list().subscribe(
      data => {
        this.habilidad = data;
      }
    )
  }

  delete(id: number): void {
    if(id != undefined){
      this.habilidadesS.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }

}
