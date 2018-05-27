import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentsViewPage } from './comments-view';

@NgModule({
  declarations: [
    CommentsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(CommentsViewPage),
  ],
})
export class CommentsViewPageModule {}
