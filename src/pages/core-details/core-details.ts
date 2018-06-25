import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoreDetails } from '../../models/CoreDetails';

/**
 * Generated class for the CoreDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-core-details',
  templateUrl: 'core-details.html',
})
export class CoreDetailsPage {

  core: CoreDetails;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.core = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoreDetailsPage');
  }

}
