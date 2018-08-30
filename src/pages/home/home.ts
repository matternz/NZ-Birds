import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BirdsService } from '../../services/birds.service';
import { Observable } from 'rxjs/Observable';
import { Bird } from '../../models/bird.model';
import { Species } from '../../models/species.model';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  birdsList$: Observable<Bird[]>;
  speciesList$: Observable<Species[]>;
  species: Species = {
    name: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private birdsService: BirdsService) {
    this.birdsList$ = this.birdsService.getBirdsList().snapshotChanges().map(changes => {
      return changes.map (c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  ionViewWillLoad() {
    this.speciesList$ = this.birdsService.getSpeciesList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  onContextChange(ctext: string): void {
    this.birdsList$ = this.birdsService.assembleSpeciesFilteredList(ctext).snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  showAllBirds(){
    this.birdsList$ = this.birdsService.getBirdsList().snapshotChanges().map(changes => {
      return changes.map (c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

}
