import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

   private apiKey = 'MY_API_KEY';

  private urlMoviedb = 'https://api.themoviedb.org/3';

  movies: any[] = [];
  searchResults: any[] = [];

  constructor(private http: HttpClient) { }

  search(text: string) {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/search/multi?query=${text}&sort_by=popularity.desc&api_key=${this.apiKey}&language=en&callback=JSONP_CALLBACK`;
    this.http.jsonp(url, 'JSONP_CALLBACK').subscribe((data: any) => this.searchResults = data.results);
    console.log(this.searchResults);
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }

  showsOnTv() {
    const fromDate = new Date();
    const toDate = new Date();
    toDate.setDate(fromDate.getDate() + 7);

    const fromDateStr = `${fromDate.getFullYear()}-${fromDate.getMonth() + 1}-${fromDate.getDate()}`;
    const toDateStr = `${toDate.getFullYear()}-${toDate.getMonth() + 1}-${toDate.getDate()}`;

    // tslint:disable-next-line:max-line-length
    // const url = `${this.urlMoviedb}/discover/tv?primary_release_date.gte=${fromDateStr}&primary_release_date.lte=${toDateStr}&api_key=${this.apiKey}&language=en&callback=JSONP_CALLBACK`;
    const url = `${this.urlMoviedb}/tv/on_the_air?api_key=${this.apiKey}&language=en&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }

  popularShows() {
    const url = `${this.urlMoviedb}/discover/tv?sort_by=popularity.desc&api_key=${this.apiKey}&language=en&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }

  searchShow(text: string) {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/search/tv?query=${text}&sort_by=popularity.desc&api_key=${this.apiKey}&language=en&callback=JSONP_CALLBACK`;
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

  searchMovie(text: string) {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/search/movie?query=${text}&sort_by=popularity.desc&api_key=${this.apiKey}&language=en&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }

}
