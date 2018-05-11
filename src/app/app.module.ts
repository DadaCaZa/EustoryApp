import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { ListpoiPage } from '../pages/listpoi/listpoi';
import { PoiViewPage } from '../pages/poi-view/poi-view';
import { SearchViewPage } from '../pages/search-view/search-view';
import { ConfigurationViewPage} from '../pages/configuration-view/configuration-view';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';



export const firebaseConfig={
      apiKey: "AIzaSyBL69EtYEYMWsUGeQIJE6tVi5QHuafVtyw",
      authDomain: "eustoryapp-c813d.firebaseapp.com",
      databaseURL: "https://eustoryapp-c813d.firebaseio.com",
      projectId: "eustoryapp-c813d",
      storageBucket: "eustoryapp-c813d.appspot.com",
     messagingSenderId: "514237387874"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    PoiViewPage,
    ListpoiPage,
    ConfigurationViewPage,
    SearchViewPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig,'eustoryapp'),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    PoiViewPage,
    ListpoiPage,
    ConfigurationViewPage,
    SearchViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {

  
}

