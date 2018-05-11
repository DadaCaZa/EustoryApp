import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PoiViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-poi-view',
  templateUrl: 'poi-view.html',
})
export class PoiViewPage {
  //Array de imagenes temporal
  images=['1.png','geolo.png','lector-qr.png','reconImag.png']
  namePoi: string="";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.namePoi= this.navParams.get("namePoi");
    
  }

  //Metodo que servirá para clickar en una foto de la galeria y que se haga zoom
  makeZoomImage(image){ 
  }
  

}
