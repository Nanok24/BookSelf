import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewSearchPage } from './review-search.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewSearchPageRoutingModule {}
