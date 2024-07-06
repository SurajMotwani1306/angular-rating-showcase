import { NgModule } from '@angular/core';
import { AngularRatingShowcaseComponent } from './angular-rating-showcase.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AngularRatingShowcaseComponent
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
