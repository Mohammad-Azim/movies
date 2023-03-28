import { MoviesServiceMock } from 'src/app/services/movies/mock.movies';
import { ListMoviesComponent } from './list-movies.component';

describe('ListMoviesComponent', () => {
  let component = new ListMoviesComponent(MoviesServiceMock());
  beforeEach(async () => {});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call fetchMoviesOnSearchWithSubscribe', () => {
      spyOn(component, 'fetchMoviesOnSearchWithSubscribe');
      component.ngOnInit();
      expect(component.fetchMoviesOnSearchWithSubscribe).toHaveBeenCalled();
    });

    it('should call fetchMoviesWithoutSearch', () => {
      spyOn(component, 'fetchMoviesWithoutSearch');
      component.ngOnInit();
      expect(component.fetchMoviesWithoutSearch).toHaveBeenCalled();
    });
  });

  describe('fetchMovies', () => {
    it("should call fetchMoviesWithoutSearch don't have searchTerm", () => {
      spyOn(component.movieService.searchSubject, 'next');
      spyOn(component, 'fetchMoviesWithoutSearch');

      component.searchTerm = '';
      component.fetchMovies();
      expect(component.fetchMoviesWithoutSearch).toHaveBeenCalled();
    });

    it('should call fetchMoviesOnSearch haver searchTerm', () => {
      spyOn(component, 'fetchMoviesOnSearch');
      component.searchTerm = 'demons';
      component.fetchMovies();
      expect(component.fetchMoviesOnSearch).toHaveBeenCalled();
    });
  });

  describe('renderPage', () => {
    it('should change component.pagination value', () => {
      component.renderPage(2);
      expect(component.pagination).toEqual(2);
    });

    it('should change component.pagination value', () => {
      spyOn(component, 'fetchMovies');
      component.renderPage(1);
      expect(component.fetchMovies).toHaveBeenCalled();
    });
  });

  describe('fetchMoviesOnSearchWithSubscribe', () => {
    it('should call getMoviesByQuery', () => {
      component.fetchMoviesOnSearchWithSubscribe();
      component.movieService.searchSubject.next('demon');
      expect(component.movieService.getMoviesByQuery).toHaveBeenCalledWith(
        component.pagination,
        component.searchTerm
      );
    });
  });

  describe('fetchMoviesOnSearch', () => {
    it('should call getMoviesByQuery', () => {
      component.pagination, component.fetchMoviesOnSearch();
      expect(component.movieService.getMoviesByQuery).toHaveBeenCalledWith(
        component.pagination,
        component.searchTerm
      );
    });
  });

  describe('fetchMoviesWithoutSearch', () => {
    it('should call getMovies from movies service', () => {
      component.pagination = 1;
      component.fetchMoviesWithoutSearch();
      expect(component.movieService.getMovies).toHaveBeenCalledWith(1);
    });
  });
});
