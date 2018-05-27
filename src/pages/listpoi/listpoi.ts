import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PoiViewPage } from  '../poi-view/poi-view';
import { ReaderQrViewPage } from '../reader-qr-view/reader-qr-view';


@IonicPage()
@Component({
  selector: 'page-listpoi',
  templateUrl: 'listpoi.html',
})
export class ListpoiPage {
  // Ejemplo de que recibe el id de la temática seleccionada para asi obtener el listad de sus pois
  idTematica: number= null;
  
  //Listado de opciones para visualizar los pois de la temáticas
  options:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.idTematica =this.navParams.get("id");
   this.options = "list";
  }
  
  gotoPoiDescription(){
    this.navCtrl.push(PoiViewPage,{namePoi:"Indautxu"});
  }
  
  prueba(){
    
  }
  loadQrScanner(){
    this.options = "list";
    this.navCtrl.push(ReaderQrViewPage);
    
  }
}
