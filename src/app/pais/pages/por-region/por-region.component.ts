import { Component } from '@angular/core';
import { Country, Region } from '../../interfaces/pais-interfaces';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];


  constructor(private paisService: PaisService) { }


  getClassCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {

    if( region === this.regionActiva ){ return }

    this.regionActiva = region;

    // TODO: hacer el llamado al servicio
    this.paisService.buscarRegion(region).subscribe(paisesResp => {
    this.paises = paisesResp;
      

    });
  }


}
