import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { GLOBAL } from '../../app/global';

@IonicPage()
@Component({
  selector: 'page-mercadeo',
  templateUrl: 'mercadeo.html',
})
export class MercadeoPage {

  report_id: any;
  areaImg: any;
  a: any;
  user_id = localStorage.getItem('user_id');
  shop_id = localStorage.getItem('shop_id');
  shop_name = localStorage.getItem('name');
  evalCa = false; evalDa = false; evalDe = false; evalNi = false; evalSa = false;
  evalGe = false; evalBo = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, public loadingController: LoadingController) {
  }
  aspectosCaballero(area_id) {
    this.evalCa = true;
    let b = document.getElementById('caballeros');
    b.style.background = "#e27b26";
    this.areaImg = "http://hostingwebmex.com/z3h/caballeros.png";
    localStorage.setItem('areaImg', this.areaImg);
    this.a = GLOBAL.caballerosA;
    localStorage.setItem('as', JSON.stringify(this.a));
    const myModal = this.modal.create('AspectsPage');
    myModal.present();
  }
  aspectosDama(area_id) {
    this.evalDa = true;
    let b = document.getElementById('damas');
    b.style.background = "#e27b26";
    this.areaImg = "http://hostingwebmex.com/z3h/damas.png";
    localStorage.setItem('areaImg', this.areaImg);
    this.a = GLOBAL.damasA;
    localStorage.setItem('as', JSON.stringify(this.a));
    const myModal = this.modal.create('AspectsPage');
    myModal.present();
  }

  aspectosDeportes(area_id) {
    this.evalDe = true;
    let b = document.getElementById('deportes');
    b.style.background = "#e27b26";
    this.areaImg = "http://hostingwebmex.com/z3h/deportes.png";
    localStorage.setItem('areaImg', this.areaImg);
    this.a = GLOBAL.deportesA;
    localStorage.setItem('as', JSON.stringify(this.a));
    const myModal = this.modal.create('AspectsPage');
    myModal.present();
  }

  aspectosNinos(area_id) {
    this.evalNi = true;
    let b = document.getElementById('niños');
    b.style.background = "#e27b26";
    this.areaImg = "http://hostingwebmex.com/z3h/nino.png";
    localStorage.setItem('areaImg', this.areaImg);
    this.a = GLOBAL.niñosA;
    localStorage.setItem('as', JSON.stringify(this.a));
    const myModal = this.modal.create('AspectsPage');
    myModal.present();
  }

  aspectosSaldos(area_id) {
    this.evalSa = true;
    let b = document.getElementById('saldos');
    b.style.background = "#e27b26";
    this.areaImg = "http://hostingwebmex.com/z3h/saldos.png";
    localStorage.setItem('areaImg', this.areaImg);
    this.a = GLOBAL.saldosA;
    localStorage.setItem('as', JSON.stringify(this.a));
    const myModal = this.modal.create('AspectsPage');
    myModal.present();
  }

  aspectosGeneral() {
    this.evalGe = true;
    let b = document.getElementById('general');
    b.style.background = "#e27b26";
    this.areaImg = "http://hostingwebmex.com/z3h/general.png";
    localStorage.setItem('areaImg', this.areaImg);
    this.a = GLOBAL.generalA;
    localStorage.setItem('as', JSON.stringify(this.a));
    const myModal = this.modal.create('AspectsPage');
    myModal.present();
  }
  aspectosBodega() {
    this.evalBo = true;
    let b = document.getElementById('bodega');
    b.style.background = "#e27b26";
    this.areaImg = "http://hostingwebmex.com/z3h/bodega.png";
    localStorage.setItem('areaImg', this.areaImg);
    this.a = GLOBAL.bodegaA;
    localStorage.setItem('as', JSON.stringify(this.a));
    const myModal = this.modal.create('AspectsPage');
    myModal.present();
  }

}
