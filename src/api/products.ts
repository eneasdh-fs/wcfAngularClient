import {Injectable} from "@angular/core";
import {Api} from "./api";
import { Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Product} from "../models/Product";


@Injectable()
export class ProductsApi extends Api {

    name(): String {
        return 'Products/Repository.svc';
    }


    // http://localhost:26997/Payment/Repository.svc/payments/1/programming/?client=yope&quantity=1
    public all( ): Observable<Product[]>{
        return this.get('products' )
            .map(x => x.json().allResult || [])
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