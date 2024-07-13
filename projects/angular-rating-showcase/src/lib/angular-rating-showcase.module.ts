import { NgModule } from '@angular/core';
import { AngularRatingShowcaseComponent } from './angular-rating-showcase.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { YellowComponent } from './components/yellow/yellow.component';

@NgModule({
  declarations: [
    AngularRatingShowcaseComponent,
    YellowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    AngularRatingShowcaseComponent
  ]
})
export class AngularRatingShowcaseModule { }
