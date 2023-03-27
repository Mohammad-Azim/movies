import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
  { path: '', component: ListMoviesComponent },
  { path: `movie/:id`, component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
