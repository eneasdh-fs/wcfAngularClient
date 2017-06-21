import { Component, OnInit } from '@angular/core';
import {PaymentApi} from "../../../api/payments";
import {ActivatedRoute, Params} from "@angular/router";
import {Payment} from "../../../models/Payment";

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.scss'],
  providers: [PaymentApi]
})
export class ViewPaymentComponent implements OnInit {

  public payment: Payment = new Payment();

  constructor(
      protected route: ActivatedRoute,
      protected api: PaymentApi
  ) { }

  ngOnInit() {
    this.route.params.switchMap(
        (params: Params) => this.api.find(params['id'])
    ).subscribe((payment: Payment) =>{
      console.log(payment);
      this.payment= payment;
    });
  }

}
