import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListpoiPage } from './listpoi';
import { PoiViewPage} from '../poi-view/poi-view';


@NgModule({
  declarations: [
    ListpoiPage,
    PoiViewPage
  ],
  imports: [
    IonicPageModule.forChild(ListpoiPage),
  ],
})
export class ListpoiPageModule {}
