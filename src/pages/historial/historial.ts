import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

   url = 'http://157.230.81.230:5000/api/history/report/by-shop/last';
  // url = 'http://localhost:5000/api/history/report/by-shop/last';
  shop_id = {
    "shop_id": localStorage.getItem('shop_id')
  }
  report: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private modal: ModalController, public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    // let loader = this.loadingController.create({
    //   content: "Cargando ultimo reporte ..."
    // });
    // loader.present();
    this.http.post(this.url, this.shop_id)
      .subscribe(res => {
        console.log(res);
        this.report = res
        localStorage.setItem('report', JSON.stringify(this.report));
      });
  }

  details() {
    const myModal = this.modal.create('Historial2Page');
    myModal.present();
  }

}


