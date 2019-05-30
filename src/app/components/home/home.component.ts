import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  onTheaters: any;

  constructor(public moviesService: MoviesService) {

    this.moviesService.moviesinTheatres()
      .subscribe(data => {
        console.log(data) ;
        this.onTheaters = data.results;
      })

  }

  ngOnInit() {
  }

}
