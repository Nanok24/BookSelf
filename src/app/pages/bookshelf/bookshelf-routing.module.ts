import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookshelfBookListComponent } from './bookshelf-book-list/bookshelf-book-list.component';

import { BookshelfPage } from './bookshelf.page';

const routes: Routes = [
  {
    path: '',
    component: BookshelfPage
  },
  {
    path: 'book-list/:id',
    component: BookshelfBookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookshelfPageRoutingModule {}
