import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-historial2',
  templateUrl: 'historial2.html',
})
export class Historial2Page {
  report = JSON.parse(localStorage.getItem('report'));

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.report);
  }

}
