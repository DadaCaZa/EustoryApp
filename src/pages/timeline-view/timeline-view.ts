import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimelineViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timeline-view',
  templateUrl: 'timeline-view.html',
})
export class TimelineViewPage {

  //Variable donde se guardaran las imagenes
  imgOldNew: string="";
  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.imgOldNew= this.navParams.get("lineTimeImg");
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
