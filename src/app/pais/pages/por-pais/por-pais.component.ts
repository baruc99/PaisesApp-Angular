import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    ` li {
      cursor: pointer;
    }`
  ]
})
export class PorPaisComponent {


  termino         : string = '';
  hayError        : boolean = false;
  paises          : Country[] = [];
  paisesSugeridos : Country[] = [];

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
    
    this.paisService.buscarPais( termino )
    .subscribe( paisesResp => {
      this.paisesSugeridos = paisesResp.splice(0,3);
      console.log(paisesResp);
      
    }  );

  }

}
