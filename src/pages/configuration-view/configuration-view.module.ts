import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigurationViewPage } from './configuration-view';

@NgModule({
  declarations: [
    ConfigurationViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigurationViewPage),
  ],
})
export class ConfigurationViewPageModule {}
