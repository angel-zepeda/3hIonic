import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { GLOBAL } from '../../app/global';

@IonicPage()
@Component({
  selector: 'page-reporteo',
  templateUrl: 'reporteo.html',
})

export class ReporteoPage {
  a: any;
  report_id: any;
  areaImg: any;
  user_id = localStorage.getItem('user_id');
  shop_id = localStorage.getItem('shop_id');
  shop_name = localStorage.getItem('name');
  report = {
    "shop": this.shop_id,
    "user": this.user_id,
    "areas": [],
    "photos": [],
    "signature": ""
  }
  evalI = false; evalP = false; evalV = false; evalS = false;
  evalPu = false; evalM = false;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private modal: ModalController,
     public loadingController: LoadingController
    ) {
    localStorage.setItem('report', JSON.stringify(this.report));
  }

  ionViewDidLoad() {
    console.log(this.user_id, this.shop_id);
    localStorage.setItem('report', JSON.stringify(this.report));
  }
  mercadeo(area_id) {
    this.evalM = true;
    let b = document.getElementById('mercadeo');
    b.style.background = "#B91919";
    this.navCtrl.push('MercadeoPage');
  }
  infrastructura(area_id) {
    this.evalI = true;
    let b = document.getElementById('infra');
    b.style.background = "#B91919";
    this.areaImg = "http://hostingwebmex.com/z3h/infraestructura.png";
    localStorage.setItem('areaImg', this.areaImg);
    this.a = GLOBAL.infrastructuraA;
    localStorage.setItem('as', JSON.stringify(this.a));
    const myModal = this.modal.create('AspectsPage');
    myModal.present();
  }
  personal() {
    this.evalP = true;
    let b = document.getElementById('personal');
    b.style.background = "#B91919";
    this.areaImg = "http://hostingwebmex.com/z3h/personal.png";
    localStorage.setItem('areaImg', this.areaImg);
    this.a = GLOBAL.personalA;
    localStorage.setItem('as', JSON.stringify(this.a));
    const myModal = this.modal.create('AspectsPage');
    myModal.present();
  }

  ventas() {
    this.evalV = true;
    let b = document.getElementById('ventas');
    b.style.background = "#B91919";
    this.a = GLOBAL.ventasA;
    this.areaImg = "http://hostingwebmex.com/z3h/ventas.png";
    localStorage.setItem('areaImg', this.areaImg);
    localStorage.setItem('as', JSON.stringify(this.a));
    const myModal = this.modal.create('AspectsPage');
    myModal.present();
  }

  sala() {
    this.evalS = true;
    let b = document.getElementById('sala');
    b.style.background = "#B91919";
    this.a = GLOBAL.salaA;
    this.areaImg = "http://hostingwebmex.com/z3h/sala.png";
    localStorage.setItem('areaImg', this.areaImg);
    localStorage.setItem('as', JSON.stringify(this.a));
    const myModal = this.modal.create('AspectsPage');
    myModal.present();
  }

  publicidad() {
    this.evalPu = true;
    let b = document.getElementById('pub');
    b.style.background = "#B91919";
    this.a = GLOBAL.publicidadA;
    this.areaImg = "http://hostingwebmex.com/z3h/publicidad.png";
    localStorage.setItem('areaImg', this.areaImg);
    localStorage.setItem('as', JSON.stringify(this.a));
    const myModal = this.modal.create('AspectsPage');
    myModal.present();
  }


}
