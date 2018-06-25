import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launch } from '../../models/launchs/Launch';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LaunchDetailPage } from '../launch-detail/launch-detail';

/**
 * Generated class for the HomepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html',
})
export class HomepagePage {

  launches : Launch[];
  nextLaunche : Launch;

  constructor(private navCtrl: NavController, private navParams: NavParams, private spaceXService: SpaceXApiProvider, private inAppBrowser : InAppBrowser) {
    this.spaceXService.getNextLaunches().subscribe(data=>{
      this.nextLaunche = data.shift();
      this.launches = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepagePage');
  }

  openLink(link : string){
    this.inAppBrowser.create(encodeURI(link), '_system', null);
  }

  openLaunchDetail(launch: Launch) {
    this.navCtrl.push(LaunchDetailPage, {data: launch});
  }
}
