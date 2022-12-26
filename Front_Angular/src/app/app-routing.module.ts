import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { EditHabilidadesComponent } from './componentes/habilidades/edit-habilidades.component';
import { NewHabilidadesComponent } from './componentes/habilidades/new-habilidades.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditAcercaDeComponent } from './componentes/presentacion/edit-acerca-de.component';
import { EditSkillsComponent } from './componentes/skills/edit-skills.component';
import { NewSkillsComponent } from './componentes/skills/new-skills.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu' , component: NeweducacionComponent},
  {path: 'editedu/:id' , component: EditeducacionComponent},
  {path: 'newskill', component: NewSkillsComponent},
  {path: 'edithys/:id', component: EditSkillsComponent},
  {path: 'newhab', component: NewHabilidadesComponent},
  {path: 'edithab/:id', component: EditHabilidadesComponent},
  {path: 'editacercade/:id', component: EditAcercaDeComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
