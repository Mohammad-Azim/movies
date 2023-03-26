import { Component, Input } from '@angular/core';
import { ImageCard } from 'src/app/globalVar';
import { MovieCard } from './../../Model/MovieCard';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movieCard!: MovieCard;
  imageCard: string;

  constructor() {
    this.imageCard = ImageCard;
  }
}
