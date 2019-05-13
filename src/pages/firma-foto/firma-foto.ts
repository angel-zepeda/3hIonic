import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera'
import swal from 'sweetalert';
import Swal from 'sweetalert2'

@IonicPage()
@Component({
  selector: 'page-firma-foto',
  templateUrl: 'firma-foto.html',
})
export class FirmaFotoPage {
  url = 'http://157.230.81.230:5000/api/report/create'
   // url = 'http://localhost:5000/api/report/create'

  @ViewChild(SignaturePad) public signaturePad: SignaturePad;
  public signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 300,
    'canvasHeight': 150
  };
  public report = JSON.parse(localStorage.getItem('report'));
  public signatureImage: string;
  report_id = localStorage.getItem('report_id');
  user_id = localStorage.getItem('user_id');
  shop_id = localStorage.getItem('shop_id');
  image = [];
  cal = localStorage.getItem('cal_area');
  score: any;

  constructor(public navCtrl: NavController, 
     public navParams: NavParams, 
     private view: ViewController, 
     private http: HttpClient, 
     private camara: Camera, 
     public loadingController: LoadingController) { }

  ionViewDidLoad() {
  }

  closeModal() {
    this.view.dismiss();
  }
  canvasResize() {
    let canvas = document.querySelector('canvas');
    this.signaturePad.set('minWidth', 1);
    this.signaturePad.set('canvasWidth', canvas.offsetWidth);
    this.signaturePad.set('canvasHeight', canvas.offsetHeight);
  }

  ngAfterViewInit() {
    console.log("Reset Model Screen");
    this.signaturePad.clear();
    this.canvasResize();
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
    this.report.signature = this.signaturePad.toDataURL();
  }

  drawStart() {
    console.log('begin drawing');
  }

  foto() {
    let options: CameraOptions = {
      destinationType: this.camara.DestinationType.DATA_URL,
      quality: 30,
      encodingType: this.camara.EncodingType.JPEG,
      mediaType: this.camara.MediaType.PICTURE
    }
    this.camara.getPicture(options).then((imageData) => {
      this.image.push("data:image/jpeg;base64," + imageData);
      this.report.photos.push("data:image/jpeg;base64," + imageData);
    },
      (err) => {
        swal("No se pudo guardar la imágen", "", "error");
      });
  }

  enviar() {
    let loader = this.loadingController.create({
      content: "Procesando reporte ..."
    });
    loader.present();
    this.http.post(this.url, this.report)
      .subscribe(res => {
        console.log(res);
        this.score = res;
        
        if (this.score.reportStore.score.toFixed(2) <= 5) {
          Swal.fire({
            html: '<h1 style="color:white; font-size:5rem;">Oops!'+
            '</h1>' +
            '<h2 style="color: white"> La tienda tiene muchos detalles. </h2>',
            imageUrl: '../../assets/imgs/11.png',
            imageHeight: 65,
            background: 'rgba(0,0,0,0.7)',
            backdrop: `url('https://image.freepik.com/free-photo/leather-shoes-wooden-background_1203-7617.jpg')`,
            imageAlt: 'A tall image'
          });
        }
        if (this.score.reportStore.score.toFixed(2) > 5 && this.score.reportStore.score.toFixed(2) <= 7) {
          Swal.fire({
            html: '<h1 style="color:white; font-size:5rem;">Ok!'+
            '</h1>' +
            '<h2 style="color: white"> La tienda tiene algunos detalles. </h2>',
            imageUrl: '../../assets/imgs/33.png',
            imageHeight: 65,
            imageAlt: 'A tall image',
            background: 'rgba(0,0,0,0.7)',
            backdrop: `url('https://image.freepik.com/free-photo/leather-shoes-wooden-background_1203-7617.jpg')`
          });
        }
        if (this.score.reportStore.score.toFixed(2) > 7 && this.score.reportStore.score.toFixed(2) < 9) {
          Swal.fire({
            html: '<h1 style="color:white; font-size:5rem;">Muy bien!'+
            '</h1>' +
            '<h2 style="color: white"> La tienda tiene pocos detalles. </h2>',
            imageUrl: '../../assets/imgs/44.png',
            imageHeight: 65,
            imageAlt: 'A tall image',
            background: 'rgba(0,0,0,0.7)',
            backdrop: `url('https://image.freepik.com/free-photo/leather-shoes-wooden-background_1203-7617.jpg')`
          });
        }
        if (this.score.reportStore.score.toFixed(2) > 9 && this.score.reportStore.score.toFixed(2) <= 10) {
          Swal.fire({
            html: '<h1 style="color:white; font-size:5rem;">Perfecto!'+
            '</h1>' +
            '<h2 style="color: white"> La tienda esta en excelente estado. </h2>',
            imageUrl: '../../assets/imgs/55.png',
            imageHeight: 65,
            imageAlt: 'A tall image',
            background: 'rgba(0,0,0,0.7)',
            backdrop: `url('https://image.freepik.com/free-photo/leather-shoes-wooden-background_1203-7617.jpg')`
          });
        }
        loader.dismiss();
        this.navCtrl.popAll();
        this.navCtrl.push('InicioPage');
      });
    console.log(this.report);
  }
}