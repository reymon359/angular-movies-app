import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {
  

  showOrMovie:any;


  constructor(public moviesService: MoviesService , public route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      console.log(params);
        // this.search = params['text'];
        // this.searchMovieOrShow();
    })

  }
  ngOnInit() {
  }

}
