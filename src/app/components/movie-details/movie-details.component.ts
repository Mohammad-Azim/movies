import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackGroundImage, ImageCard } from 'src/app/globalVar';
import { Movie } from 'src/app/Model/SingleMovieTypes';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() Id!: number;
  movie!: Movie;
  imageCardUrl: string = ImageCard;
  backGroundImageUrl: string = BackGroundImage;
  poster_pathUrl?: string;

  constructor(
    public movieService: MoviesService,
    public route: ActivatedRoute
  ) {}

  /**
   * on Initialize will get one move by id and will get id from the router
   */
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieService.getMovieById(params['id']).subscribe((movie) => {
        this.movie = movie;
        this.poster_pathUrl = this.imageCardUrl + movie?.poster_path;
      });
    });
  }
}
