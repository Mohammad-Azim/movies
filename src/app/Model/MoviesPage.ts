import { MovieCard } from './MovieCard';

export interface MoviesPage {
  page: number;
  results: MovieCard[];
  total_pages: number;
  total_results: number;
}
