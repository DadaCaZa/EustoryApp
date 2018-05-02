import { Component } from '@angular/core';

/**
 * Generated class for the CityComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'city',
  templateUrl: 'city.html'
})
export class CityComponent {

  text: string;

  constructor() {
    console.log('Hello CityComponent Component');
    this.text = 'Hello World';
  }

}
