import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { FilterPipe } from '../../pipes/filter.pipe';
import { UserSearchBookListComponent } from './user-search-book-list/user-search-book-list.component';
import { UserSearchDetailsComponent } from './user-search-details/user-search-details.component';
import { UserSearchPageRoutingModule } from './user-search-routing.module';
import { UserSearchPage } from './user-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSearchPageRoutingModule
  ],
  declarations: [UserSearchPage, FilterPipe, UserSearchDetailsComponent, UserSearchBookListComponent]
})
export class UserSearchPageModule {
}
