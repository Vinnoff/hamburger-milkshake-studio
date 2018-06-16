import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Capsule } from '../../models/capsule/Capsule';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';

/**
 * Generated class for the CapsuleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule-list',
  templateUrl: 'capsule-list.html',
})
export class CapsuleListPage {

  capsules: Capsule[];

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private spaceXService: SpaceXApiProvider) {
      this.spaceXService.getAllCapsules().subscribe(data => {
        this.capsules = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsuleListPage');
  }

  openCapsuleDetail(capsule: Capsule) {
    //this.navCtrl.push(CapsuleD, {data: capsule});
  }

}
