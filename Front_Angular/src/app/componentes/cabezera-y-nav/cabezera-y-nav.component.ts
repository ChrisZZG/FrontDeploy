import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-cabezera-y-nav',
  templateUrl: './cabezera-y-nav.component.html',
  styleUrls: ['./cabezera-y-nav.component.scss']
})
export class CabezeraYNavComponent implements OnInit {

  isLogged = false;


  persona: persona = null;

  constructor(public personaService: PersonaService, private router:Router, private tokenService: TokenService) { }


  ngOnInit(): void {

    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

}

onLogout(): void{
  this.tokenService.logOut();
  window.location.reload();
}

login(){
  this.router.navigate(['/login'])
}

cargarPersona(): void {
  this.personaService.detail(1).subscribe(
    data => {
      this.persona = data;
    }
  )
}


}
