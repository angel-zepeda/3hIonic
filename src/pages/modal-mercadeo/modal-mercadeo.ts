import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-mercadeo',
  templateUrl: 'modal-mercadeo.html',
})
export class ModalMercadeoPage {
  public mobImg: string;

  constructor(
    public navCtrl: NavController,
    private view: ViewController) {
    this.mobImg = localStorage.getItem('mobImg');
  }

  ionViewDidLoad() {
    console.log(this.mobImg);

  }

  closeModal() {
    this.view.dismiss();
  }
}
