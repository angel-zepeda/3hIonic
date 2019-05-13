import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  username = localStorage.getItem('username');
  name = localStorage.getItem('name');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    this.username = this.username.toUpperCase();
  }
  buscarTienda(page) {
    this.navCtrl.push('BuscarTiendaPage');
    localStorage.setItem('page', page);
  }

  eventos() {
    this.navCtrl.push('EventosPage');
  }

}
