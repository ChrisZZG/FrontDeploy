import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.scss']
})
export class EditSkillsComponent implements OnInit {

  skill: Skill = null;

  constructor(private skillS: SkillService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Errro al Modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }

}
