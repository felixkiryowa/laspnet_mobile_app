import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HelpPage } from './help.page';

const routes: Routes = [
  {
    path: 'help',
    component: HelpPage,
    children:[
      {path: 'contact', loadChildren: '../contact/contact.module#ContactPageModule' },
      {path: 'faq', loadChildren: '../faq/faq.module#FaqPageModule'},
      {path: 'about', loadChildren: '../about/about.module#AboutPageModule'},
  ]
  },
  {
    path: '',
    redirectTo:'/help/contact',
    pathMatch: 'full'  
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HelpPage]
})
export class HelpPageModule {}
