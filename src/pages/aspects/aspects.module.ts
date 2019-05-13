import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AspectsPage } from './aspects';

@NgModule({
  declarations: [
    AspectsPage,
  ],
  imports: [
    IonicPageModule.forChild(AspectsPage),
  ],
})
export class AspectsPageModule { }
