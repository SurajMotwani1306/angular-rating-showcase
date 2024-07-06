# Angular Rating Showcase
Showcasing ratings based on data entered
<br/>

<table>
  <tr>
    <td align="center">
      <img alt="Angular Progress Bar SM"
        src="projects/angular-rating-showcase/src/lib/Screenshot/rating.PNG" />
    </td>
   </tr>
</table>

## Installation

```sh
npm i angular-rating-showcase
```

## Usage

## Import
```ts
import { AngularRatingShowcaseModule } from 'angular-rating-showcase';
```

## Fundamental Usage
```html
<lib-angular-rating-showcase 
    [ratingsCount]="4.5" 
    [maxRating]="5" 
/>
```

## Fundamentals / Mandatories

| Property/Method       |  Type   | Description                                                             |
| ----------------------| :-----: | ------------------------------- |
| ratingsCount          | number  | Ratings value gained            |
| maxRating             | number  | Maxium ratings (Out of which..) |


## Future Plans
- [ ] Animated stars.

## Author
Suraj Motwani - Email: suraj.motwani1306@gmail.com

## License

Angular Rating Showcase is available under the MIT license. See the LICENSE file for more info.

