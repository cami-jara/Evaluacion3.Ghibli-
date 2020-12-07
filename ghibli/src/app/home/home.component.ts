import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../model/pelicula';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
 pelicula:Pelicula[];
 peliculas:Pelicula[];
 constructor(private peliculaghibli: PeliculasService) {}

 ngOnInit(): void {
  this.peliculaghibli.getPelicula().subscribe(peliculas=>this.pelicula=peliculas);
}
/*mostrarPelicula(id){
this.filmsghibli.getPelicula(id).subscribe(pelicula=>this.film=pelicula);
console.log(this.film)
}*/
}
