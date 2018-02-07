import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

// Pages
import { HomePage } from '../pages/home/home';
import { CniPage } from '../pages/cni/cni';
import { ActeNaissancePage } from '../pages/acteNaissance/acteNaissance';
import { AutorisationEntreePage } from '../pages/autorisationEntree/autorisationEntree';
import { AutorisationSejourPage } from '../pages/autorisationSejour/autorisationSejour';
import { CarteSejourPage } from '../pages/carteSejour/carteSejour';
import { PassportPage } from '../pages/passport/passport';
import { PermisPage } from '../pages/permis/permis';
import { VisaPage } from '../pages/visa/visa';


import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CniPage,
    ActeNaissancePage,
    AutorisationEntreePage,
    AutorisationSejourPage,
    CarteSejourPage,
    PassportPage,
    PermisPage,
    VisaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CniPage,
    ActeNaissancePage,
    AutorisationEntreePage,
    AutorisationSejourPage,
    CarteSejourPage,
    PassportPage,
    PermisPage,
    VisaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
