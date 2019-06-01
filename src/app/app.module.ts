import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';

// Routing
import { APP_ROUTING } from './app.routes';

// Pipes
import { MovieImgPipe } from './pipes/movie-img.pipe';
import { GalleryComponent } from './components/home/gallery.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MovieComponent,
    SearchComponent,
    MovieImgPipe,
    GalleryComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
