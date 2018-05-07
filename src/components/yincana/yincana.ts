import { Component } from '@angular/core';
import { YincanaModel } from '../../models/yincana-model';

/**
 * Generated class for the YincanaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'yincana',
  templateUrl: 'yincana.html'
})
export class YincanaComponent {

  text: string;

  constructor() {
    console.log('Hello YincanaComponent Component');
    this.text = 'Hello World';
  }

}
