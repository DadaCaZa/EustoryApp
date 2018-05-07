import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PoiViewPage } from  '../poi-view/poi-view';

/**
 * Generated class for the ListpoiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listpoi',
  templateUrl: 'listpoi.html',
})
export class ListpoiPage {

  // Ejemplo de que recibe el id de la temática seleccionada para asi obtener el listad de sus pois
  idTematica: number= null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.idTematica =this.navParams.get("id");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListpoiPage');
  }

  gotoPoiDescription(){
    this.navCtrl.push(PoiViewPage,{namePoi:"Indautxu"});
  }

}
