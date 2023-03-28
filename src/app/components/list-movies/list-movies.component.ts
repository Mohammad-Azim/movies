import { Component } from '@angular/core';
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

  /**
   * on init will open a subscription to active when user search on something
   * then will fetch movies
   */
  ngOnInit() {
    this.fetchMoviesOnSearchWithSubscribe();
    this.fetchMoviesWithoutSearch();
  }

  /**
   * if there is no search term then will call fetchMoviesWithoutSearch
   *  else will call fetchMoviesOnSearch ( that mean the user is searching)
   *
   * this method will been
   */
  fetchMovies() {
    if (this.searchTerm.length < 1) {
      this.fetchMoviesWithoutSearch();
    } else {
      this.fetchMoviesOnSearch();
    }
  }

  /**
   *
   * @param event the number of the page
   * this method will invoke each time user navigate to another page
   * and it will call fetchMovies method
   */
  renderPage(event: number) {
    this.pagination = event;
    this.fetchMovies();
  }

  fetchMoviesOnSearchWithSubscribe() {
    this.movieService.searchSubject!.subscribe((searchTerm) => {
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

  fetchMoviesOnSearch() {
    this.movieService
      .getMoviesByQuery(this.pagination, this.searchTerm)
      .subscribe((page) => {
        this.moviesPage = page;
        this.allMovies = page.total_results;
      });
  }

  fetchMoviesWithoutSearch() {
    this.movieService.getMovies(this.pagination).subscribe((page) => {
      this.moviesPage = page;
      this.allMovies = page.total_results;
    });
  }
}
