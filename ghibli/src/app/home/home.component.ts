import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  initPeliculas: any;
  constructor(private peliculasService: PeliculasService) { }
 //En esta parte agrego codigo cuando la pagina se carga
  ngOnInit(): void {
    this.peliculasService.getPeliculas().subscribe(pel => {
      this.initPeliculas = pel;
      this.initPeliculas = this.initPeliculas.results;
     });
  }

}
