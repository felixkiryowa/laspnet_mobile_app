import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  articles: Array<any>;
  loading: any;

  constructor(
    private apiService: ApiService,
    private loadingController: LoadingController
    ) { }

  ngOnInit() {
    this.getNews();
  }

  // Function to present loading
  async presentLoadingWithOptions() {
    this.loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'

    });
    return await this.loading.present();
  }

  getNews(){
    this.presentLoadingWithOptions();
    this.apiService.getNews().subscribe((data)=>{
      this.loading.dismiss();
      this.articles = data['articles'];
    }, err => {
      this.loading.dismiss();
    });
  }

}
