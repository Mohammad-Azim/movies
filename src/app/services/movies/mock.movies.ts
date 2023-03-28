import { HttpClient } from '@angular/common/http';
import { of, Subject } from 'rxjs';
import { MoviesService } from './movies.service';

export const MoviesServiceMock = (): MoviesService => {
  return {
    http: null as unknown as HttpClient,
    searchSubject: new Subject<string>(),
    getMovies: jasmine.createSpy('getMovies').and.returnValue(of({})),
    getMoviesByQuery: jasmine
      .createSpy('getMoviesByQuery')
      .and.returnValue(of({})),
    getMovieById: jasmine.createSpy('getMovieById').and.returnValue(of({})),
    formatQueryString: jasmine
      .createSpy('formatQueryString')
      .and.returnValue(of({})),
  };
};
