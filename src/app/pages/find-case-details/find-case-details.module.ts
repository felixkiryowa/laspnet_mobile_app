import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FindCaseDetailsPage } from './find-case-details.page';

const routes: Routes = [
  {
    path: '',
    component: FindCaseDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FindCaseDetailsPage]
})
export class FindCaseDetailsPageModule {}
