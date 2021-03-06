import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCheckboxModule, MdSelectModule, MdInputContainer, MdInputDirective, MdToolbarModule,
  MdSidenavModule, MdMenuModule, MdCardModule, MdGridListModule
} from '@angular/material';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './movies/view/view.component';
import { ProductsComponent } from './products/products.component';
import { PaymentsComponent } from './payments/payments.component';
import { ViewPaymentComponent } from './payments/view-payment/view-payment.component';
const appRoutes: Routes = [
  {
    path: 'payments',
    component: PaymentsComponent,
  },
  {
    path: 'movies/:programming/:name',
    component: ViewComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'payments/:id',
    component: ViewPaymentComponent
  },

];


@NgModule({
  declarations: [
    AppComponent,
    MdInputContainer,
    MdInputDirective,
    MoviesComponent,
    ViewComponent,
    ProductsComponent,
    PaymentsComponent,
    ViewPaymentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MdButtonModule,
    MdCheckboxModule,
    FormsModule,
    MdSelectModule,
    JsonpModule,
    MdSidenavModule,
    MdToolbarModule,
    MdMenuModule,
    MdCardModule,
    MdGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
