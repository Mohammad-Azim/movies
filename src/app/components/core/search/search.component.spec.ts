import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesServiceMock } from 'src/app/services/movies/mock.movies';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component = new SearchComponent(MoviesServiceMock());

  beforeEach(async () => {
    component.searchTerm = 'avenger';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSearch', () => {
    it('should invoke searchSubject', () => {
      spyOn(component.moviesService.searchSubject, 'next');
      component.onSearch();
      expect(component.moviesService.searchSubject.next).toHaveBeenCalledWith(
        component.searchTerm!
      );
    });
  });
});
