import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  constructor( 
    private activateRoute: ActivatedRoute,
    private paisService:PaisService
    ){}


  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id ) )
    )
    .subscribe( resp =>{
        console.log( resp );
        
      }
    )
    // this.activateRoute.params.subscribe(
    //   ({id}) => {
    //     this.paisService.getPaisPorAlpha( id ).subscribe( pais =>{
    //       console.log(pais);
          
    //     })
        
    //   }
    // )
  
  }


}
