import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  search: string = '';

  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
  }

  searchMovieOrShow() {
    if (this.search.length === 0) {
      return;
    }
    this.moviesService.search(this.search);
  }

}
