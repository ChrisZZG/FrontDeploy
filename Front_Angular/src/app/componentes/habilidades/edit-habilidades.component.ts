import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.scss']
})
export class EditHabilidadesComponent implements OnInit {

  habilidad: Habilidades = null;

  constructor(private habilidadesS: HabilidadesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadesS.detail(id).subscribe(
      data => {
        this.habilidad = data;
      }, err => {
        alert("Error al Modificar Habilidades");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadesS.update(id, this.habilidad).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al actualizar las Habilidades");
        this.router.navigate(['']);
      }
    )
  }

}
