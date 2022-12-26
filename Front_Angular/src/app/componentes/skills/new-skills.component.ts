import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.scss']
})
export class NewSkillsComponent implements OnInit {

  nombre: string;

  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creada correctamente!");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo añadir Skill");
        this.router.navigate(['']);
      }
    )
  }

}
