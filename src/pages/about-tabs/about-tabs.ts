import { Component } from '@angular/core';
import { AboutCompanyPage } from '../about-company/about-company';
import { AboutUsPage } from '../about-us/about-us';

/**
 * Generated class for the AboutTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  templateUrl: 'about-tabs.html'
})
export class AboutTabsPage {

  tab1Root = AboutUsPage;
  tab2Root = AboutCompanyPage;

  constructor() {

  }
}
