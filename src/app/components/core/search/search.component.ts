import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchTerm?: string;

  constructor(public moviesService: MoviesService) {}

  onSearch() {
    this.moviesService.searchSubject.next(this.searchTerm!);
  }
}
