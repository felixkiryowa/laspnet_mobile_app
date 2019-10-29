import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CauseListingResultsPage } from './cause-listing-results.page';

const routes: Routes = [
  {
    path: '',
    component: CauseListingResultsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CauseListingResultsPage]
})
export class CauseListingResultsPageModule {}
