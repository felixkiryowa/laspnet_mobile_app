import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CauseListDetailsPage } from './cause-list-details.page';

const routes: Routes = [
  {
    path: '',
    component: CauseListDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CauseListDetailsPage]
})
export class CauseListDetailsPageModule {}
