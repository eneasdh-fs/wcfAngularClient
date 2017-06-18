import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Output() notificar: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit( ) {

  }

  public selected

}
