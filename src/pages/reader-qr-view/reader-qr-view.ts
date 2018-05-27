import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { PoiViewPage } from '../poi-view/poi-view';


/**
 * Generated class for the ReaderQrViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reader-qr-view',
  templateUrl: 'reader-qr-view.html',
})
export class ReaderQrViewPage {
  
  options: BarcodeScannerOptions;
  
  scannedData:any={};
  optionsa:string;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController,
     private barcodeScanner: BarcodeScanner) {
      this.optionsa = "qr";
  }

  //Método que generar el lector de qr
   //Método que generar el lector de qr
   scanQR(){
    const options = {
      preferFrontCamera: false, // iOS and Android
      showFlipCameraButton: true, // iOS and Android
      showTorchButton: true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      prompt: 'Cóloca el código qr en el centro de la pantalla', // Android
        // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      resultDisplayDuration: 500,
      orientation: 'portrait',
      disableAnimations: true, // iOS
      disableSuccessBeep: false // iOS
    };

  this.barcodeScanner
        .scan(options).then((barcodeData) => {

          this.scannedData = barcodeData;
          const alert = this.alertCtrl.create({
            title: 'Código detectado',
            subTitle: barcodeData.text,
            buttons: ['OK']
          });
          

          if(barcodeData.text !==""){
              alert.present();
              //Tras detectar el código lo manda a la vista del poi
              this.navCtrl.push(PoiViewPage,{namePoi:barcodeData.text});
          }
          
   }).catch((err) => {
         const alert = this.alertCtrl.create({
           title: 'Atención!',
           subTitle: "Ha ocurrido un error, por favor utilice otro sistema para detectar el poi --> "+err,
          buttons: ['Close']
       });
    alert.present();
   });
}


}
