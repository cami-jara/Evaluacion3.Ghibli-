import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  
   initPeliculas: any;
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void{
  this.peliculasService.getPeliculas().subscribe(pel => {
    this.initPeliculas = pel;
    this.initPeliculas = this.initPeliculas.results;
   });
  }
  
}