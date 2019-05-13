import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/debounceTime';


@IonicPage()
@Component({
  selector: 'page-buscar-tienda',
  templateUrl: 'buscar-tienda.html',
})

export class BuscarTiendaPage {

   urlSearch = 'http://157.230.81.230:5000/api/shops/search-shop';
  // urlSearch = 'http://localhost:5000/api/shops/search-shop';

  shops: any;
  searchQuery: string = '';
  page = localStorage.getItem("page");

  search = {
    "name": ""
  }
  constructor(public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {

  }
  inicio(shop_id, name, shop_number) {
    this.navCtrl.push(this.page);
    localStorage.setItem('name', name);
    localStorage.setItem('shop_id', shop_id);
    localStorage.setItem('shop_number', shop_number);
  }

  enviar() {
    let loader = this.loadingController.create({
      content: "Buscando Tiendas..."
    });
    loader.present();
    this.search.name = this.search.name.toLocaleUpperCase();
    this.http.post(this.urlSearch, this.search)
      .subscribe(res => {
        loader.dismiss();
        this.shops = res;
        console.log(res);
        this.shops = this.shops.shops;
        console.log(this.shops);
        console.log(this.search);
      });
  }
}

