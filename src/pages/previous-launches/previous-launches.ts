import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';
import { Launch } from '../../models/launchs/Launch';
import { LaunchDetailPage } from '../launch-detail/launch-detail';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the PreviousLaunchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-previous-launches',
  templateUrl: 'previous-launches.html',
})
export class PreviousLaunchesPage {

  launches: Launch[];

  constructor(private navCtrl: NavController, 
    private spaceXService: SpaceXApiProvider, 
    public loadingCtrl: LoadingController) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousLaunchesPage');
    let loader = this.loadingCtrl.create({
      content: 'Chargement...',
    });
    loader.present().then(() => {
      this.spaceXService.getAllLaunches().subscribe(data => {
        this.launches = data;
        loader.dismiss();
      });
    });
  }

  openLaunchDetail(launch: Launch) {
    this.navCtrl.push(LaunchDetailPage, {data: launch});
  }
}