import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import swal from 'sweetalert';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myPhoto: any;
  user_data: any;
  url = 'http://157.230.81.230:5000/api/user/login';
  // url = 'http://localhost:5000/api/user/login';

  user_sign_in = {
    "email": "",
    "password": "",
    "getToken": true
  }
  constructor(public navCtrl: NavController, private http: HttpClient, public loadingController: LoadingController) {
  }
  login() {
    let loader = this.loadingController.create({
      content: "Iniciando sesión ..."
    });
    loader.present();
    this.http.post(this.url, this.user_sign_in)
      .subscribe(res => {
        loader.dismiss();
        this.user_data = res;
        if (this.user_data.message) {
          swal("Oops", "" + this.user_data.message, "error");
        } else {
          localStorage.setItem('user_data', this.user_data);
          localStorage.setItem('user_id', this.user_data.user._id);
          localStorage.setItem('username', this.user_data.user.nick);
          swal("Bienvenido!", "Supervisor: " + this.user_data.user.nick, "success");
          this.navCtrl.push('InicioPage');
        }
      });
  }
}
