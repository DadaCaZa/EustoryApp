import { Component } from '@angular/core';
import { TagModel } from '../../models/tag-model';

/**
 * Generated class for the TagComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tag',
  templateUrl: 'tag.html'
})
export class TagComponent {

  text: string;

  constructor() {
    console.log('Hello TagComponent Component');
    this.text = 'Hello World';
  }

}
