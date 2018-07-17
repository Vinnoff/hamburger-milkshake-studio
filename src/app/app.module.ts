import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GoogleMaps } from '@ionic-native/google-maps';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpaceXApiProvider } from '../providers/space-x-api/space-x-api';
import { HttpClientModule } from '@angular/common/http';
import { LaunchDetailPage } from '../pages/launch-detail/launch-detail';
import { RocketDetailPage } from '../pages/rocket-detail/rocket-detail';
import { AboutTabsPage } from '../pages/about-tabs/about-tabs';
import { CapsuleDetailPage } from '../pages/capsule-detail/capsule-detail';
import { EquipmentTabsPage } from '../pages/equipment-tabs/equipment-tabs';
import { CoreDetailsPage } from '../pages/core-details/core-details';
import { LaunchpadDetailPage } from '../pages/launchpad-detail/launchpad-detail';
import { LaunchesPage } from '../pages/launches/launches';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { GoogleMapPage } from '../pages/google-map/google-map';

@NgModule({
  declarations: [
    MyApp,
    LaunchesPage,
    SearchPage,
    EquipmentTabsPage,
    AboutTabsPage,
    LaunchDetailPage,
    RocketDetailPage,
    CapsuleDetailPage,
    LaunchpadDetailPage,
    CoreDetailsPage,
    GoogleMapPage,
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
    LaunchesPage,
    SearchPage,
    EquipmentTabsPage,
    AboutTabsPage,
    LaunchDetailPage,
    RocketDetailPage,
    CapsuleDetailPage,
    CoreDetailsPage,
    LaunchpadDetailPage,
    GoogleMapPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpaceXApiProvider,
    InAppBrowser,
    GoogleMaps
  ]
})
export class AppModule {}
