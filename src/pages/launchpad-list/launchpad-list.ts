import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launchpads } from '../../models/launchpads/Launchpads';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';

/**
 * Generated class for the LaunchpadListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad-list',
  templateUrl: 'launchpad-list.html',
})
export class LaunchpadListPage {

  launchpads: Launchpads[];

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private spaceXService: SpaceXApiProvider) {
      this.spaceXService.getAllLaunchpads().subscribe(data => {
        this.launchpads = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadListPage');
  }

  openLaunchpadDetail(launchpad: Launchpads) {
    //Pour detail apres
    //this.navCtrl.push(LaunchpadDetailPage, {data: launchpad});
  }

}
