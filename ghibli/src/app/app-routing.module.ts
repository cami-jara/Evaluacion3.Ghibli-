import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FilmComponent } from './film/film.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{​​​​​​​ path: 'home', component: HomeComponent}​​​​​​​,
{​​​​​​​ path: 'about', component: AboutComponent}​​​​​​​,
{​​​​​​​ path: 'film', component: FilmComponent }​​​​​​​,
{​​​​​​​ path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
