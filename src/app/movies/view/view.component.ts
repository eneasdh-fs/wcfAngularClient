import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {MovieApi} from "../../../api/movie";
import {Movie} from "../../../models/Movie";
import {Programming} from "../../../models/Programming";
import {ProgrammingApi} from "../../../api/programming";
import {PaymentApi} from "../../../api/payments";
import {ProductsApi} from "../../../api/products";
import {Product} from "../../../models/Product";


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers:[ProgrammingApi, PaymentApi, ProductsApi]
})
export class ViewComponent implements OnInit {

  public programming: Programming = null;
  public products: Product[] = null;

  public quantity: number = 1;
  public total: Number = 0;

  constructor(
      protected route: ActivatedRoute,
      protected api: ProgrammingApi,
      protected payments : PaymentApi,
      protected productApi: ProductsApi

  ) { }

    ngOnInit() {

      this.route.params.switchMap(
          (params: Params) => this.api.find(params['programming'])
      ).subscribe((programming: Programming) =>{
        console.log(Programming);
        this.total = programming.movies.price;
        return this.programming = programming;
      });

      this.productApi.all().subscribe( (x: Product[]) => {
        console.log(x)
        this.products = x;
      })

  }


  get selected( )
  {
    console.log('asdasd')
    return this.products.filter( x => x.selected ).length;
  }

  public change( )
  {
    this.total = this.programming.movies.price * this.quantity;
  }

  public complete()
  {
    console.log(this.programming.id, this.quantity);

    this.payments.store(this.programming.id, this.quantity).subscribe((json: Object) => {
      console.log(json)
    });
  }

}
