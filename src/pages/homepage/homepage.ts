import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launch } from '../../models/Launch';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';

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

  constructor(private navCtrl: NavController, private navParams: NavParams, private spaceXService: SpaceXApiProvider) {
    this.spaceXService.getNextLaunches().subscribe(data=>{
      this.nextLaunche = data.shift();
      this.launches = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepagePage');
  }

}
