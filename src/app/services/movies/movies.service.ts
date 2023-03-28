import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiKey, MovieAPI } from 'src/app/globalVar';
import { MoviesPage } from 'src/app/Model/MoviesPage';
import { Movie } from 'src/app/Model/SingleMovieTypes';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(public http: HttpClient) {}
  searchSubject = new Subject<string>();

  /**
   *
   * @param pageNumber the number of requested page
   * @returns MoviesPage type contain list of movies and number of movies
   */
  getMovies(pageNumber: number): Observable<MoviesPage> {
    return this.http.get<MoviesPage>(
      `${MovieAPI}/movie/popular?api_key=${ApiKey}&page=${pageNumber}`
    );
  }

  /**
   *
   * @param pageNumber the number of requested page
   * @param query the search query that user search on
   * @returns MoviesPage type contain list of movies that user searching on
   */
  getMoviesByQuery(pageNumber: number, query: string): Observable<MoviesPage> {
    query = this.formatQueryString(query);
    return this.http.get<MoviesPage>(
      `${MovieAPI}/search/movie?api_key=${ApiKey}&page=${pageNumber}&query=${query}`
    );
  }

  /**
   *
   * @param id id of the movie requested
   * @returns Movie type contain information about the movie
   */
  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${MovieAPI}/movie/${id}?api_key=${ApiKey}`);
  }

  /**
   *
   * @param query the query string (search string user entered)
   * @returns query string reformated to be valid
   */
  formatQueryString(query: string): string {
    query = query.trim();
    let array = query.split(' ');
    query = array.join('+');
    return query;
  }
}
