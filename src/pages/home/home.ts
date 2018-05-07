import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListpoiPage } from '../listpoi/listpoi'



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
   
  }

  gotoListPois(){
    this.navCtrl.push(ListpoiPage, {id: 1});
  }

}
