import { Component } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { MoviesPage } from 'src/app/Model/MoviesPage';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
})
export class ListMoviesComponent {
  allMovies: number = 0;
  pagination: number = 1;
  moviesPage!: MoviesPage;
  searchTerm: string = '';

  constructor(public movieService: MoviesService) {}

  fetchMovies() {
    if (this.searchTerm.length < 1) {
      this.fetchMoviesWithoutSearch();
    } else {
      this.fetchMoviesOnSearch();
    }
  }

  renderPage(event: number) {
    this.pagination = event;
    this.fetchMovies();
  }

  ngOnInit() {
    this.fetchMoviesOnSearchWithSubscribe();
    this.fetchMoviesWithoutSearch();
  }

  private fetchMoviesOnSearchWithSubscribe() {
    this.movieService.searchSubject.subscribe((searchTerm) => {
      this.searchTerm = searchTerm;
      this.pagination = 1;
      this.movieService
        .getMoviesByQuery(this.pagination, searchTerm)
        .subscribe((page) => {
          if (searchTerm.length > 0) {
            this.moviesPage = page;
            this.allMovies = page.total_results;
          }
        });
    });
  }

  private fetchMoviesOnSearch() {
    this.movieService
      .getMoviesByQuery(this.pagination, this.searchTerm)
      .subscribe((page) => {
        this.moviesPage = page;
        this.allMovies = page.total_results;
      });
  }

  private fetchMoviesWithoutSearch() {
    this.searchTerm = '';
    this.movieService.getMovies(this.pagination).subscribe((page) => {
      this.moviesPage = page;
      this.allMovies = page.total_results;
    });
  }
}
