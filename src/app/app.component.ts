import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProfilePage} from '../pages/profile/profile';
import { SearchViewPage } from '../pages/search-view/search-view';
import { ConfigurationViewPage } from '../pages/configuration-view/configuration-view';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.loadPages();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  

  loadPages(){
    this.pages =[
      {title :'Home', component: HomePage, icon: 'home'},
      {title :'Perfil', component: ProfilePage, icon: 'person'},
      {title :'Detectar', component: SearchViewPage, icon: 'search'},
      {title :'Configuración', component: ConfigurationViewPage, icon: 'construct'}
    ];
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }

  disconnectUser(){
    
    this.nav.setRoot(LoginPage);
    
  }
}

