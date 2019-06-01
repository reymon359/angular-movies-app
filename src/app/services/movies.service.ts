import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

private apiKey = 'MY_API_KEY';


  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }


  showsOnTv() {
    const fromDate = new Date();
    const toDate = new Date();
    toDate.setDate(fromDate.getDate() + 7);

    const fromDateStr = `${fromDate.getFullYear()}-${fromDate.getMonth() + 1}-${fromDate.getDate()}`;
    const toDateStr = `${toDate.getFullYear()}-${toDate.getMonth() + 1}-${toDate.getDate()}`;

    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/discover/tv?primary_release_date.gte=${fromDateStr}&primary_release_date.lte=${toDateStr}&api_key=${this.apiKey}&language=en&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }

  popularShows() {
    const url = `${this.urlMoviedb}/discover/tv?sort_by=popularity.desc&api_key=${this.apiKey}&language=en&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }

  moviesinTheatres() {
    const fromDate = new Date();
    const toDate = new Date();
    toDate.setDate(fromDate.getDate() + 7);

    const fromDateStr = `${fromDate.getFullYear()}-${fromDate.getMonth() + 1}-${fromDate.getDate()}`;
    const toDateStr = `${toDate.getFullYear()}-${toDate.getMonth() + 1}-${toDate.getDate()}`;

    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${fromDateStr}&primary_release_date.lte=${toDateStr}&api_key=${this.apiKey}&language=en&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }

  popularMovies() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=en&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }

  getMostPopular() {

    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=en&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, 'JSONP_CALLBACK');

  }
}
