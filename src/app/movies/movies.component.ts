import { Component, OnInit } from '@angular/core';
import {ProgrammingApi} from "../../api/programming";
import {Programming} from "../../models/Programming";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [ ProgrammingApi ],
})
export class MoviesComponent implements OnInit {

  public programming: Programming[ ] ;
  errorMessage: string;

  constructor(protected api: ProgrammingApi) {
  }

  ngOnInit( ) {
    console.log(this.programming);
    this.api.programming( ).subscribe( programming => {

      this.programming = programming
      this.programming.forEach(x => {
        console.log(x.release_at)
      });
    }, error =>  this.errorMessage = <any>error);


  }

}
