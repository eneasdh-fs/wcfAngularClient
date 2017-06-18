/**
 * Created by enea on 11/06/2017.
 */
import {Http, Response} from '@angular/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export abstract class Api{

    public routes = {};
    protected host: String = 'http://localhost:26997';

    constructor(protected http: Http){
        this.routes['movies'] = ``;
        this.routes['movies.find'] = '${name}';
        this.routes['genres.movies'] = 'genres/${id}/movies';
        this.routes['programming'] = ``;
        this.routes['programming.find'] = '${id}';
        this.routes['genres.movies'] = 'genres/${id}/movies';
        this.routes['payment.store'] = 'payments/${programming_id}/programming/?client=${client}&quantity=${quantity}';
        this.routes['products'] = ``;
    }

    public url(name: String, params: Object)
    {
        let route = this.buildRoute(name);
        return this.replacer(route, params).trim();
    }

    protected replacer(template: String, obj: Object) {
        let keys = Object.keys(obj);
        let func = Function(...keys, "return `" + template + "`;");

        return func(...keys.map(k => obj[k]));
    }


    protected buildRoute(name: String): String
    {
        let route = this.routes[name.toString()];

        return `${this.host}/${this.name()}/${route}`;
    }


    public get(name: String, params: Object = {}): Observable<Response> {

        return this.http.get(this.url(name, params));
    }

    public post(name: String, params: Object = {}): Observable<Response> {
        return this.http.post(this.url(name, params), {});
    }


    abstract name( ): String;
}
