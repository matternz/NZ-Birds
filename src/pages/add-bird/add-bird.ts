import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Bird } from '../../models/bird.model';
import { BirdsService } from '../../services/birds.service';

/**
 * Generated class for the AddBirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-bird',
  templateUrl: 'add-bird.html',
})
export class AddBirdPage {

  bird: Bird = {
    name: '',
    species: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private birds: BirdsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBirdPage');
  }

  addBird(bird: Bird) {
    this.birds.addBird(bird).then(ref => {
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    });
  }
}
