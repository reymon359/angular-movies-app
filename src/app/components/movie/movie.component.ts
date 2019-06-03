import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {


  showOrMovie: any;


  constructor(public moviesService: MoviesService, public route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      console.log(params);
      if (params['shormo'] === 'show') {
        this.moviesService.getShow(params['id'])
          .subscribe(data => {
          this.showOrMovie = data;
          console.log(this.showOrMovie);
          })
      } else if (params['shormo'] === 'movie') {
        this.moviesService.getMovie(params['id'])
          .subscribe(data => {
          this.showOrMovie = data;
          console.log(this.showOrMovie);
          })
      }
    })

  }
  ngOnInit() {
  }

}
