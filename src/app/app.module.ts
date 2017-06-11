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


const appRoutes: Routes = [
  {
    path: 'movies/:name',
    component: ViewComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    MdInputContainer,
    MdInputDirective,
    MoviesComponent,
    ViewComponent,
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
