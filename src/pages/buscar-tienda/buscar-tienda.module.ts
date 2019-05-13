import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscarTiendaPage } from './buscar-tienda';

@NgModule({
  declarations: [
    BuscarTiendaPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscarTiendaPage),
  ],
})
export class BuscarTiendaPageModule {}
