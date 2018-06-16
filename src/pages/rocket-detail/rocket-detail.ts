import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rocket } from '../../models/rockets/Rocket';

/**
 * Generated class for the RocketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket-detail',
  templateUrl: 'rocket-detail.html',
})
export class RocketDetailPage {

  rocket: Rocket;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rocket = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketDetailPage');
  }

}
