import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoiViewPage } from './poi-view';

@NgModule({
  declarations: [
    PoiViewPage,
  ],
  imports: [
    IonicPageModule.forChild(PoiViewPage),
  ],
})
export class PoiViewPageModule {}
