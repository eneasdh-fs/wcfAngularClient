/**
 * Created by enea on 11/06/2017.
 */
import {Injectable} from "@angular/core";
import {Api} from "./api";
import { Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Payment} from "../models/Payment";


@Injectable()
export class PaymentApi extends Api {

    name(): String {
        return 'Payment/Repository.svc';
    }


    // http://localhost:26997/Payment/Repository.svc/payments/1/programming/?client=yope&quantity=1
    public store( programming_id: number, quantity: number, elements: Array<any> ): Observable<Object>{

        return this.get('payment.store', {
            programming_id: programming_id, quantity: quantity, client: 'test client', element: elements.join('-')
        })
            .map(x => x.json().storeResult || { })
            .catch(this.handleError);
    }

    public all(): Observable<Payment[]>
    {
        return this.get('payments.index').map( x => x.json().allResult || [])
            .catch(this.handleError);
    }

    public find( id: string ): Observable<Payment>
    {
        return this.get('payments.find', { id: id}).map( x => x.json( ).findResult).catch( this.handleError );
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