import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';
import { Rocket } from '../../models/rockets/Rocket';
import { RocketDetailPage } from '../rocket-detail/rocket-detail';

/**
 * Generated class for the RocketListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket-list',
  templateUrl: 'rocket-list.html',
})
export class RocketListPage {

  rockets: Rocket[];

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private spaceXService: SpaceXApiProvider) {
      this.spaceXService.getAllRockets().subscribe(data => {
        this.rockets = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketListPage');
  }

  openRocketDetail(rocket: Rocket) {
    this.navCtrl.push(RocketDetailPage, {data: rocket});
  }

}
