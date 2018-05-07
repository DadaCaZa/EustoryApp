import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ListpoiPage } from '../listpoi/listpoi'



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
   
  }

  gotoListPois(){
    this.presentLoadingDefault();
    this.navCtrl.push(ListpoiPage, {id: 1});  
  }

  //Metodo que genera una pantalla de carga, cuando está creando la ventana de los pois de la temática
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Cargando puntos de interes...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }
}
