import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  moviesonTheaters: any;
  popularmovies: any;

  showsOnTv: any;
  popularShows: any;

  constructor(public moviesService: MoviesService) {
    // Getting the movies in Theaters
    this.moviesService.moviesinTheatres()
      .subscribe((data: any) => this.moviesonTheaters = data.results);

    // Getting the most popular movies
    this.moviesService.popularMovies()
      .subscribe((data: any) => this.popularmovies = data.results);

    // Getting the shows on TV
    this.moviesService.showsOnTv()
      .subscribe((data: any) => this.showsOnTv = data.results);

    // Getting the most popular shows
    this.moviesService.popularShows()
      .subscribe((data: any) => this.popularShows = data.results);
  }

  ngOnInit() {
  }

}
