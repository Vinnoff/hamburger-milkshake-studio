import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launchpads } from '../../models/launchpads/Launchpads';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';
import { LaunchpadDetailPage } from '../launchpad-detail/launchpad-detail';

/**
 * Generated class for the LaunchpadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpads',
  templateUrl: 'launchpads.html',
})
export class LaunchpadsPage {

  launchpads: Launchpads[];

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private spaceXService: SpaceXApiProvider) {
      this.spaceXService.getAllLaunchpads().subscribe(data => {
        this.launchpads = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadsPage');
  }

  openLaunchpadDetail(launchpad: Launchpads) {
    this.navCtrl.push(LaunchpadDetailPage, {data: launchpad});
  }

}
