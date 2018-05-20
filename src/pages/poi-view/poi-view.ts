import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, } from 'ionic-angular';
import { TimelineViewPage } from '../timeline-view/timeline-view';


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
  //Nombre del poi seleccionado
  namePoi: string="";
  //array de las foto para la linea temporal
  imgOldNew=['1.png','geolo.png'];
  //Tags del poi
  tags=['palacete','antiguo','tiempo','historia','Bilbao'];

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.namePoi= this.navParams.get("namePoi");
    
  }

  //Metodo que llama a la modal view que tiene el slide de la foto actual y la antigua
  gotoTimeLine(){
    let modal= this.modalCtrl.create(TimelineViewPage,{lineTimeImg: this.imgOldNew});
    modal.present();
  }


}
