import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReaderQrViewPage } from './reader-qr-view';

@NgModule({
  declarations: [
    ReaderQrViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ReaderQrViewPage),
  ],
})
export class ReaderQrViewPageModule {}
