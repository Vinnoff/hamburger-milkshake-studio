import { Component} from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoreDetails } from '../../models/CoreDetails';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';
import { CoreDetailsPage } from '../core-details/core-details';

/**
 * Generated class for the CoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cores',
  templateUrl: 'cores.html',
})
export class CoresPage {

  cores : CoreDetails[];
  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private spaceXService: SpaceXApiProvider) {
    this.spaceXService.getAllCores().subscribe(data => {
      this.cores = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoresPage');
  }
  openCoreDetails(core: CoreDetails) {
    this.navCtrl.push(CoreDetailsPage, {data: core});
  }
}
