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
import { RocketListPage } from '../pages/rocket-list/rocket-list';
import { RocketDetailPage } from '../pages/rocket-detail/rocket-detail';
@NgModule({
  declarations: [
    MyApp,
    HomepagePage,
    LaunchListPage,
    SearchPage,
    LaunchDetailPage,
    RocketListPage,
    RocketDetailPage,
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
    LaunchDetailPage,
    RocketListPage,
    RocketDetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpaceXApiProvider
  ]
})
export class AppModule {}
