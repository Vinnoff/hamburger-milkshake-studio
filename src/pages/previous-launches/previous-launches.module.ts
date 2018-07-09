import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviousLaunchesPage } from './previous-launches';

@NgModule({
  declarations: [
    PreviousLaunchesPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviousLaunchesPage),
  ],
})
export class PreviousLaunchesPageModule {}
