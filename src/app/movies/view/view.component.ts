import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Programming} from "../../../models/Programming";
import {ProgrammingApi} from "../../../api/programming";
import {PaymentApi} from "../../../api/payments";
import {ProductsApi} from "../../../api/products";
import {Product} from "../../../models/Product";
import _ from 'underscore';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers:[ProgrammingApi, PaymentApi, ProductsApi]
})
export class ViewComponent implements OnInit {

  public programming: Programming = null;
  public products: Product[] = null;
  public items: Array<any> = [];
  public quantity: number = 1;
  public total: number = 0;
  public selecteds: Product[] = [];
  constructor(
      protected route: ActivatedRoute,
      protected api: ProgrammingApi,
      protected payments : PaymentApi,
      protected productApi: ProductsApi

  ) { }

    ngOnInit() {
      console.log( [10, 10].reduce((sum, x) => {
        console.log(sum, x)
        return sum + x;
      }));
      this.route.params.switchMap(
          (params: Params) => this.api.find(params['programming'])
      ).subscribe((programming: Programming) =>{
        console.log(programming);
        this.total = programming.movies.price;
        return this.programming = programming;
      });

      this.productApi.all().subscribe( (x: Product[]) => {
        console.log(x)

        this.products = x;
      })

  }

  public selected( )
  {
    this.selecteds = this.products.filter( x => x.selected );
    this.change();
  }

  public change( )
  {
    let t = 0;
    this.selecteds.forEach( x => t += x.price);
    this.total = this.programming.movies.price * this.quantity + t;
  }

  public complete()
  {
    console.log(this.programming.id, this.quantity);

    this.payments.store(this.programming.id, this.quantity, this.selecteds.map(x => x.id )).subscribe((json: Object) => {
      console.log(json)
    });
  }

}
