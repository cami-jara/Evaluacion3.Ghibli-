import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private serverUrl: string = "https://ghibliapi.herokuapp.com/films/";//Todo:Esto se va a ir al hell
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json;'
  });
  constructor(private http: HttpClient) { } 

    getPeliculas() {
      return this.http.get(this.serverUrl + "ghibli")
      .pipe(
        retry(4),
      catchError(err => {
        return of(err)
      })
    )
  }
}
