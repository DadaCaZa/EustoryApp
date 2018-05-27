import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReaderQrViewPage } from '../reader-qr-view/reader-qr-view';

/**
 * Generated class for the SearchViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-view',
  templateUrl: 'search-view.html',
})
export class SearchViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchViewPage');
  }

  readQr(){
    this.navCtrl.push(ReaderQrViewPage);
  }
}
