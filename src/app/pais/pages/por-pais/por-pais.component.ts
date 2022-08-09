import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {


  termino   : string = '';
  hayError  : boolean = false;
  paises    : Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;
    // console.log(this.termino);

    this.paisService.buscarPais( termino )
    .subscribe( paisesResp  =>{
      this.paises = paisesResp;
      console.log( paisesResp );
      
    },( err )=> {
      this.hayError = true;
      this.paises = [];
    });
    
  }

  sugerencias( termino: string ){

    this.hayError = false;
    // TODO: crear sugerencias 

  }

}
