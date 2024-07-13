import { NgModule } from '@angular/core';
import { AngularRatingShowcaseComponent } from './angular-rating-showcase.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { YellowComponent } from './components/yellow/yellow.component';
import { GreyComponent } from './components/grey/grey.component';
import { HalfComponent } from './components/half/half.component';
import { LessThanHalfComponent } from './components/less-than-half/less-than-half.component';
import { MoreThanHalfComponent } from './components/more-than-half/more-than-half.component';

@NgModule({
  declarations: [
    AngularRatingShowcaseComponent,
    YellowComponent,
    GreyComponent,
    HalfComponent,
    LessThanHalfComponent,
    MoreThanHalfComponent
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
