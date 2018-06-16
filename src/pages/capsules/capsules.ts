import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';
import { Capsule } from '../../models/capsule/Capsule';
import { CapsuleDetailPage } from '../capsule-detail/capsule-detail';

/**
 * Generated class for the CapsulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsules',
  templateUrl: 'capsules.html',
})
export class CapsulesPage {

  capsules: Capsule[];

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private spaceXService: SpaceXApiProvider) {
      this.spaceXService.getAllCapsules().subscribe(data => {
        this.capsules = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsulesPage');
  }

  openCapsuleDetail(capsule: Capsule) {
    this.navCtrl.push(CapsuleDetailPage, {data: capsule});
  }

}
