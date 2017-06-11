/**
 * Created by enea on 11/06/2017.
 */
import {Injectable} from "@angular/core";
import {Api} from "./api";
import { Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Programming} from "../models/Programming";


@Injectable()
export class ProgrammingApi extends Api{

    name(): String {
        return 'Programming/Repository.svc';
    }


    public programming(): Observable<Programming[]> {
        return this.get('programming')
            .map(x => {
                let body = x.json();
                console.log(body.allResult);
                return body.allResult || { };
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