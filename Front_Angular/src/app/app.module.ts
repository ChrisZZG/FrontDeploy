import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabezeraYNavComponent } from './componentes/cabezera-y-nav/cabezera-y-nav.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { EditSkillsComponent } from './componentes/skills/edit-skills.component';
import { NewSkillsComponent } from './componentes/skills/new-skills.component';
import { EditHabilidadesComponent } from './componentes/habilidades/edit-habilidades.component';
import { NewHabilidadesComponent } from './componentes/habilidades/new-habilidades.component';
import { EditAcercaDeComponent } from './componentes/presentacion/edit-acerca-de.component';





@NgModule({
  declarations: [
    AppComponent,
    CabezeraYNavComponent,
    PresentacionComponent,
    HabilidadesComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    PiePaginaComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillsComponent,
    NewSkillsComponent,
    EditHabilidadesComponent,
    NewHabilidadesComponent,
    EditAcercaDeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
