import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {MovieApi} from "../../../api/movie";
import {Movie} from "../../../models/Movie";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public movie: Movie = new Movie();

  constructor(protected route: ActivatedRoute, protected  api: MovieApi) { }

  ngOnInit() {
    this.route.params.switchMap(
        (params: Params) => this.api.find(params['name'])
    ).subscribe((movie: Movie) =>{

      console.log(movie);
      console.log(movie.name);

      return this.movie = movie;
    });

  }

}
