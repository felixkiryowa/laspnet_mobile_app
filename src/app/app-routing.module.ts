import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'case-filing', loadChildren: './pages/case-filing/case-filing.module#CaseFilingPageModule' },
  { path: 'criminal-details/:sectionId', loadChildren: './pages/criminal-details/criminal-details.module#CriminalDetailsPageModule' },
  { path: 'civil-details/:procedureId', loadChildren: './pages/civil-details/civil-details.module#CivilDetailsPageModule' },
  { path: 'find-case', loadChildren: './pages/find-case/find-case.module#FindCasePageModule' },
  { path: 'find-case-results', loadChildren: './pages/find-case-results/find-case-results.module#FindCaseResultsPageModule' },
  { path: 'find-case-details', loadChildren: './pages/find-case-details/find-case-details.module#FindCaseDetailsPageModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' },
  { path: 'news', loadChildren: './pages/news/news.module#NewsPageModule' },
  { path: 'news-details', loadChildren: './pages/news-details/news-details.module#NewsDetailsPageModule' },
  { path: 'links', loadChildren: './pages/links/links.module#LinksPageModule' },
  { path: 'report', loadChildren: './pages/report/report.module#ReportPageModule' },
  { path: 'cause-listing', loadChildren: './pages/cause-listing/cause-listing.module#CauseListingPageModule' },
  { path: 'cause-listing-results', loadChildren: './pages/cause-listing-results/cause-listing-results.module#CauseListingResultsPageModule' },
  { path: 'cause-list-details', loadChildren: './pages/cause-list-details/cause-list-details.module#CauseListDetailsPageModule' },
  { path: 'feedback', loadChildren: './pages/feedback/feedback.module#FeedbackPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
