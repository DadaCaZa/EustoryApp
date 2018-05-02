import { Component } from '@angular/core';

/**
 * Generated class for the ThematicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'thematic',
  templateUrl: 'thematic.html'
})
export class ThematicComponent {

  text: string;

  constructor() {
    console.log('Hello ThematicComponent Component');
    this.text = 'Hello World';
  }

}
