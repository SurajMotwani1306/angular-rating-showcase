import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-angular-rating-showcase',
  templateUrl: './angular-rating-showcase.component.html',
  styleUrl: './angular-rating-showcase.component/css'
})
export class AngularRatingShowcaseComponent {

  @Input() ratingsCount: number = 0;
  @Input() maxRating: number = 5;
  iterateArray: any[] = [];
  postDecimalNumber: number = 0;
  prefixNumber: number = 0;
  remainingStars: number = 0;
  flag: boolean = true;

  ngOnInit(){
    this.prefixNumber = parseInt(this.ratingsCount.toString().split(".")[0]);
    this.postDecimalNumber = parseInt(this.ratingsCount.toFixed(2).toString().split(".")[1]);

    for(let i=1; i <= this.maxRating; i++){
      if(i <= this.prefixNumber){
        this.iterateArray.push('1');
      }else{
        if(this.postDecimalNumber !== 0){
          if(this.flag){
            this.flag = false;
            if(this.postDecimalNumber < 50){
              this.iterateArray.push('less');
            }else if(this.postDecimalNumber === 50){
              this.iterateArray.push('half');
            }else{
              this.iterateArray.push('more');
            }
          }
          this.postDecimalNumber = 0;
        }else{
          this.iterateArray.push('0');
        }
      }
    }
  }
}
