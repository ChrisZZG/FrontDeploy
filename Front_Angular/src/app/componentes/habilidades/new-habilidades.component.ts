import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.scss']
})
export class NewHabilidadesComponent implements OnInit {

  laborales: string;
  sociales: string;


  constructor(private habilidadesS: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const habilidades = new Habilidades(this.laborales, this.sociales);
    this.habilidadesS.save(habilidades).subscribe(
      data => {
        alert("habilidad creada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo al añadir la habilidad");
        this.router.navigate(['']);
      }
    )
  }

}
