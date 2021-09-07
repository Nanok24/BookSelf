import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookSearchPageRoutingModule } from './book-search-routing.module';

import { BookSearchPage } from './book-search.page';
import { FilterPipe } from '../../pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookSearchPageRoutingModule
  ],
  declarations: [BookSearchPage, FilterPipe]
})
export class BookSearchPageModule {}
