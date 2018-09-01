import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Species } from '../../models/species.model';
import { BirdsService } from '../../services/birds.service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  species: Species = {
    name: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private regSpecies: BirdsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  addSpecies(species: Species) {
    this.regSpecies.addSpecies(species).then(ref => {
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    });
  }

}
