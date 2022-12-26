import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.scss']
})
export class NeweducacionComponent implements OnInit {

  tituloE: string;
  institucionE: string;
  descripcionE: string;
  urlE : string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.tituloE, this.institucionE, this.descripcionE, this.urlE);
    this.educacionS.save(educacion).subscribe(data => {
      alert("Educacion añadida correctamente!");
      this.router.navigate(['']);
    }, err => {
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }
}
