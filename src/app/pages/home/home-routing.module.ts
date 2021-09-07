import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'bookshelf',
        loadChildren: () => import('../bookshelf/bookshelf.module').then((m) => m.BookshelfPageModule)
      },
      {
        path: 'scanner',
        loadChildren: () => import('../scanner/scanner.module').then((m) => m.ScannerPageModule)
      },
      {
        path: 'review',
        loadChildren: () => import('../review/review.module').then((m) => m.ReviewPageModule)
      },
      {
        path: '',
        redirectTo: '/home/bookshelf',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/bookshelf',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {
}
