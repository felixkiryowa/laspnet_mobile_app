import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private loadingController: LoadingController
    ) {}

  ngOnInit() {

    this.presentLoading();
  }

  // Function to present a loading spinner
  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner:'bubbles',
      duration: 2000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
