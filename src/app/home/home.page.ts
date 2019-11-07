import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private loadingController: LoadingController,
    private youtube: YoutubeVideoPlayer
    ) {}

  ngOnInit() {

    this.presentLoading();
  }

  // Function to present a loading spinner
  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner:'crescent',
      duration: 2000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  // Function to present loader for you tube streaming
  async presentLoadingToStream() {
    const loading = await this.loadingController.create({
      spinner:'bubbles',
      duration: 2000,
      message: 'Streaming Starting...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  // Function to start streaming
  startStreaming(){
    this.presentLoadingToStream();
    this.youtube.openVideo('8g7l-1A6d2U');
  }

}
