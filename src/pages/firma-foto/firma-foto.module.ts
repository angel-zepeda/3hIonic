import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirmaFotoPage } from './firma-foto';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    FirmaFotoPage,
  ],
  imports: [
    SignaturePadModule,
    IonicPageModule.forChild(FirmaFotoPage),
  ],
})
export class FirmaFotoPageModule { }
