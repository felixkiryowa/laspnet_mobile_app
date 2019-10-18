import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FindCaseResultsPage } from './find-case-results.page';

const routes: Routes = [
  {
    path: '',
    component: FindCaseResultsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FindCaseResultsPage]
})
export class FindCaseResultsPageModule {}
