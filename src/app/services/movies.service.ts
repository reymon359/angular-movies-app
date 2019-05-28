import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey = 'MY_API_KEY';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  
  constructor(private http: HttpClient) { }

  getMostPopular(){

      let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

      return this.http.jsonp(url,'JSONP_CALLBACK');

  }
}
