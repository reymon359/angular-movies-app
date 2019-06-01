import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImg'
})
export class MovieImgPipe implements PipeTransform {

  transform(movie: any): any {
    const url = 'https://image.tmdb.org/t/p/w500';

    if (movie.backdrop_path) {
      return url + movie.backdrop_path;
    } else {
      if (movie.poster_path) {
        return url + movie.poster_path;
      } else {
        // If it is a person
        if (movie.media_type === 'person') {
          return url + movie.profile_path;
        } else {
          return 'assets/no-image.png';
        }
      }
    }

  }

}
