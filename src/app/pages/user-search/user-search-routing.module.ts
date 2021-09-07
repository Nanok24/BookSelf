import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchBookListComponent } from './user-search-book-list/user-search-book-list.component';
import { UserSearchDetailsComponent } from './user-search-details/user-search-details.component';
import { UserSearchPage } from './user-search.page';

const routes: Routes = [
  {
    path: '',
    component: UserSearchPage
  },{
    path: 'user-bookshelves/:id',
    component: UserSearchDetailsComponent
  },{
    path: 'user-book-list/:id',
    component: UserSearchBookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSearchPageRoutingModule {}
