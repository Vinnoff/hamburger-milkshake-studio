import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the AboutTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-tabs',
  templateUrl: 'about-tabs.html'
})
export class AboutTabsPage {

  aboutUsRoot = 'AboutUsPage'
  aboutCompanyRoot = 'AboutCompanyPage'
  
  constructor(public navCtrl: NavController) {}

}
