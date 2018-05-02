import { Component } from '@angular/core';

/**
 * Generated class for the EvaluationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'evaluation',
  templateUrl: 'evaluation.html'
})
export class EvaluationComponent {

  text: string;

  constructor() {
    console.log('Hello EvaluationComponent Component');
    this.text = 'Hello World';
  }

}
