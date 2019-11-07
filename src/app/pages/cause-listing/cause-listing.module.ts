import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from 'ionic-selectable';

import { CauseListingPage } from './cause-listing.page';

const routes: Routes = [
  {
    path: '',
    component: CauseListingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicSelectableModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CauseListingPage]
})
export class CauseListingPageModule {}
