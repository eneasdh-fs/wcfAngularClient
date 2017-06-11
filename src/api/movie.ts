/**
 * Created by enea on 11/06/2017.
 */
import {Injectable} from "@angular/core";
import {Api} from "./api";
import {Movie} from "../models/Movie";
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class MovieApi extends Api{

    name(): String {
        return 'Movie/Repository.svc';
    }


    public movies(): Observable<Movie[]> {

        return this.get('movies')
            .map(x => {
                let body = x.json();
                console.log(body.allResult);
                return body.allResult || { };
            })
            .catch(this.handleError);

    }

    public find( name: string ): Observable<Movie>{
        return this.get('movies.find', { name: name }) .map(x => {
                let body = x.json();
                return body.findOrFailResult || { };
            })
            .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}