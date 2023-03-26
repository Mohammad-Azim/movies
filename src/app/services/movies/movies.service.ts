import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MovieAPI } from 'src/app/globalVar';
import { MoviesPage } from 'src/app/Model/MoviesPage';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(public http: HttpClient) {}

  searchSubject = new Subject<string>();

  getMovies(pageNumber: number): Observable<MoviesPage> {
    return this.http.get<MoviesPage>(
      `${MovieAPI}/3/movie/popular?api_key=f82ecbb7a5110caecaee2bee5e4c79d6&page=${pageNumber}`
    );
  }

  getMoviesByQuery(pageNumber: number, query: string): Observable<MoviesPage> {
    query = this.formatQueryString(query);
    return this.http.get<MoviesPage>(
      `${MovieAPI}/3/search/movie?api_key=f82ecbb7a5110caecaee2bee5e4c79d6&page=${pageNumber}&query=${query}`
    );
  }

  private formatQueryString(query: string): string {
    query = query.trim();
    let array = query.split(' ');
    query = array.join('+');
    return query;
  }
}
