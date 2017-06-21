import {Programming} from "./Programming";
import {Detail} from "./Detail";
export class Payment
{

    public id: number;
    public programming: Programming;
    public payment_detail: Detail[];
    public quantity: string;

}