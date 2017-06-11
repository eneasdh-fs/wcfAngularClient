import { Component } from '@angular/core';
import { MovieApi } from '../api/movie';
import {Movie} from "../models/Movie";

//import {SoapService} from 'autopulous-angular2-soap/soap.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    MovieApi
  ],
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  public movies: Movie[];
  errorMessage: string;

  constructor(protected api: MovieApi) {
    api.movies()  .subscribe(
        heroes => this.movies = heroes,
        error =>  this.errorMessage = <any>error);

    console.log()
  }
}
