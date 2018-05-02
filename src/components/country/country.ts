import { Component } from '@angular/core';

/**
 * Generated class for the CountryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'country',
  templateUrl: 'country.html'
})
export class CountryComponent {

  text: string;

  constructor() {
    console.log('Hello CountryComponent Component');
    this.text = 'Hello World';
  }

}
