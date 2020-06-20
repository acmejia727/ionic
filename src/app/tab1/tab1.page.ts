import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nombre:any = 'Andres'

  constructor(private router:Router,
    public alertController: AlertController,
    public modalController: ModalController
    ) {
    
  }

  ngOnInit() {
    this.nueva()
  }

  conctato(){    
    this.nombre = "Andres mejia"
    //this.presentAlert(this.nombre)
    this.presentModal()
  }

  nueva(){
    console.log('hola mundo')
  }

  async presentAlert(x:any) {
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Hola '+x,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
