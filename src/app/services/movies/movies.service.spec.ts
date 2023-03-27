import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';
import { ApiKey, MovieAPI } from 'src/app/globalVar';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMovies', () => {
    it('should call get to return MoviesPage', () => {
      spyOn(service.http, 'get');
      service.getMovies(1);
      expect(service.http.get).toHaveBeenCalledWith(
        `${MovieAPI}/movie/popular?api_key=${ApiKey}&page=1`
      );
    });
  });

  describe('getMoviesByQuery', () => {
    it('should call formatQueryString', () => {
      spyOn(service, 'formatQueryString');
      service.getMoviesByQuery(1, 'the avengers');
      expect(service.formatQueryString).toHaveBeenCalledWith('the avengers');
    });

    it('should call get to return MoviesPage but filtered by search', () => {
      spyOn(service.http, 'get');
      service.getMoviesByQuery(1, 'the avengers');
      expect(service.http.get).toHaveBeenCalledWith(
        `${MovieAPI}/search/movie?api_key=${ApiKey}&page=1&query=the+avengers`
      );
    });
  });

  describe('getMovieById', () => {
    it('should call get to get movie by id', () => {
      spyOn(service.http, 'get');
      service.getMovieById(32);
      expect(service.http.get).toHaveBeenCalledWith(
        `${MovieAPI}/movie/32?api_key=${ApiKey}`
      );
    });
  });

  describe('formatQueryString', () => {
    it('should re format the search string to be valid to the API', () => {
      expect(service.formatQueryString(' the avenger ')).toEqual('the+avenger');
    });
  });
});
