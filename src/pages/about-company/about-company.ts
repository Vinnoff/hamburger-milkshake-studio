import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyInfo } from '../../models/company/CompanyInfo';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';

/**
 * Generated class for the AboutCompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-company',
  templateUrl: 'about-company.html',
})
export class AboutCompanyPage {

  company : CompanyInfo;
  spaceXInfo : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private spaceXApiProvider: SpaceXApiProvider) {
    this.spaceXApiProvider.getSpaceXInfo().subscribe(data => {
      this.spaceXInfo = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutCompanyPage');
  }

}
