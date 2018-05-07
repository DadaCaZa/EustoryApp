import { Component } from '@angular/core';
import { PoiModel } from '../../models/poi-model';

/**
 * Generated class for the PoiComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'poi',
  templateUrl: 'poi.html'
})
export class PoiComponent {

  text: string;

  constructor() {
    console.log('Hello PoiComponent Component');
    this.text = 'Hello World';
  }

}
