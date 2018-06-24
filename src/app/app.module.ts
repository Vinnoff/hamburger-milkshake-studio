import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomepagePage } from '../pages/homepage/homepage';
import { SearchPage } from '../pages/search/search';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpaceXApiProvider } from '../providers/space-x-api/space-x-api';
import { LaunchListPage } from '../pages/launch-list/launch-list';
import { HttpClientModule } from '@angular/common/http';
import { LaunchDetailPage } from '../pages/launch-detail/launch-detail';
import { RocketDetailPage } from '../pages/rocket-detail/rocket-detail';
import { AboutTabsPage } from '../pages/about-tabs/about-tabs';
import { CapsuleDetailPage } from '../pages/capsule-detail/capsule-detail';
import { EquipmentTabsPage } from '../pages/equipment-tabs/equipment-tabs';
import { CoreDetailsPage } from '../pages/core-details/core-details';
import { LaunchpadDetailPage } from '../pages/launchpad-detail/launchpad-detail';
import { LaunchpadListPage } from '../pages/launchpad-list/launchpad-list';
import { RocketListPage } from '../pages/rocket-list/rocket-list';
import { CapsuleListPage } from '../pages/capsule-list/capsule-list';

@NgModule({
  declarations: [
    MyApp,
    HomepagePage,
    LaunchListPage,
    SearchPage,
    EquipmentTabsPage,
    AboutTabsPage,
    LaunchDetailPage,
    RocketDetailPage,
    CapsuleDetailPage,
    LaunchpadDetailPage,
    LaunchpadListPage,
    CoreDetailsPage,
    RocketListPage,
    CapsuleListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
    }),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomepagePage,
    LaunchListPage,
    SearchPage,
    EquipmentTabsPage,
    AboutTabsPage,
    LaunchDetailPage,
    RocketDetailPage,
    CapsuleDetailPage,
    CoreDetailsPage,
    LaunchpadDetailPage,
    LaunchpadListPage,
    RocketListPage,
    CapsuleListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpaceXApiProvider
  ]
})
export class AppModule {}
