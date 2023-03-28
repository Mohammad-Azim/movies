import Spy = jasmine.Spy;
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceMock } from 'src/app/services/movies/mock.movies';

import { MovieDetailsComponent } from './movie-details.component';
import { of } from 'rxjs';

describe('MovieDetailsComponent', () => {
  let route = {
    params: of({ id: 26 }),
  };
  let component = new MovieDetailsComponent(
    MoviesServiceMock(),
    route as unknown as ActivatedRoute
  );
  beforeEach(async () => {});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should  call getMovieById', () => {
      component.ngOnInit();
      expect(component.movieService.getMovieById).toHaveBeenCalledWith(26);
    });
  });
});
