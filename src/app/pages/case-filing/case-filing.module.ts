import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CaseFilingPage } from './case-filing.page';

const routes: Routes = [
  {
    path: 'case-filing',
    component: CaseFilingPage,
    children: [
      {
        path: 'criminal',
        children: [
          {
            path: '',
            loadChildren: '../criminal/criminal.module#CriminalPageModule',
          }
        ]
      },
      {
        path: 'civil',
        children: [
          {
            path: '',
            loadChildren: '../civil/civil.module#CivilPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'case-filing/criminal',
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
  declarations: [CaseFilingPage]
})
export class CaseFilingPageModule {}
