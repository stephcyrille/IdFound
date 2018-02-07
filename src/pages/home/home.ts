import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CniPage } from '../cni/cni';
import { ActeNaissancePage } from '../acteNaissance/acteNaissance';
import { AutorisationEntreePage } from '../autorisationEntree/autorisationEntree';
import { AutorisationSejourPage } from '../autorisationSejour/autorisationSejour';
import { CarteSejourPage } from '../carteSejour/carteSejour';
import { PassportPage } from '../passport/passport';
import { PermisPage } from '../permis/permis';
import { VisaPage } from '../visa/visa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private showCni(){
    this.navCtrl.push(CniPage);
  }

  private showPassport(){
    this.navCtrl.push(PassportPage);
  }

  private showCarteSejour(){
    this.navCtrl.push(CarteSejourPage);
  }

  private showVisa(){
    this.navCtrl.push(VisaPage);
  }

  private showAutEntree(){
    this.navCtrl.push(AutorisationEntreePage);
  }

  private showAutSejour(){
    this.navCtrl.push(AutorisationSejourPage);
  }

  private showActe(){
    this.navCtrl.push(ActeNaissancePage);
  }

  private showPermis(){
    this.navCtrl.push(PermisPage);
  }
}
