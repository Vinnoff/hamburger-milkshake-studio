import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launchpads } from '../../models/launchpads/Launchpads';

/**
 * Generated class for the LaunchpadDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad-detail',
  templateUrl: 'launchpad-detail.html',
})
export class LaunchpadDetailPage {

  launchpad: Launchpads

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.launchpad = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadDetailPage');
  }

}
