import { Component, OnInit } from '@angular/core';
import {PaymentApi} from '../../api/payments';
import {Payment} from '../../models/Payment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  providers: [PaymentApi]
})
export class PaymentsComponent implements OnInit {

  public payments: Payment[] = [ ];

  constructor(protected api: PaymentApi) {}

  ngOnInit( ) {
    this.api.all().subscribe( (payments: Payment[]) => {
      console.log(payments)
      this.payments = payments;
    });
  }

}
