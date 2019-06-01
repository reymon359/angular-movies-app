import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  search: string = '';

  constructor(public moviesService: MoviesService, public route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      console.log(params);
      if (params['text']) {
        this.search = params['text'];
        this.searchMovieOrShow();
      }
    })

  }

  ngOnInit() {
  }

  searchMovieOrShow() {
    if (this.search.length === 0) {
      return;
    }
    this.moviesService.search(this.search);
  }

}
  