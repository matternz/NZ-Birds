import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Bird } from '../../models/bird.model';

/**
 * Generated class for the ViewBirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-bird',
  templateUrl: 'view-bird.html',
})
export class ViewBirdPage {
  bird: Bird;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.bird = this.navParams.get('bird');
  }

}
