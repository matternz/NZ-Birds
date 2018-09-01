import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BirdsService } from '../../services/birds.service';
import { Bird } from '../../models/bird.model'
/**
 * Generated class for the EditBirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-bird',
  templateUrl: 'edit-bird.html',
})
export class EditBirdPage {

  bird: Bird;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private birds: BirdsService) {
  }

  ionViewWillLoad() {
    this.bird = this.navParams.get('bird');
  }

  saveBird(bird: Bird) {
    this.birds.editBird(bird).then(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }

  deleteBird(bird: Bird) {
    this.birds.removeBird(bird).then(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }

}
