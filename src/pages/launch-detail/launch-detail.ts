import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launch } from '../../models/launchs/Launch';
import { RocketDetailPage } from '../rocket-detail/rocket-detail';

/**
 * Generated class for the LaunchDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-detail',
  templateUrl: 'launch-detail.html',
})
export class LaunchDetailPage {

  launch: Launch;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.launch = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchDetailPage');
    console.log(this.launch.mission_name);
  }

  openRocketDetail(rocketId: string) {
    this.navCtrl.push(RocketDetailPage, {rocketId: rocketId, isFromLaunchOrLaunchPad: true});
  }
}
