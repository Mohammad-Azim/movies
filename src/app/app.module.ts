import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/core/search/search.component';
import { LogoComponent } from './components/core/logo/logo.component';
import { NavigationComponent } from './components/core/navigation/navigation.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    MovieCardComponent,
    ListMoviesComponent,
    FooterComponent,
    SearchComponent,
    LogoComponent,
    NavigationComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
