import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';
import { AddBookModalComponent } from './add-book-modal/add-book-modal.component';
import { AddBookshelfComponent } from './add-bookshelf/add-bookshelf.component';
import { BookshelfBookListComponent } from './bookshelf-book-list/bookshelf-book-list.component';

import { BookshelfPageRoutingModule } from './bookshelf-routing.module';

import { BookshelfPage } from './bookshelf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookshelfPageRoutingModule
  ],
  declarations: [BookshelfPage, BookshelfBookListComponent, AddBookshelfComponent, AddBookModalComponent],
  providers: [NavParams]
})
export class BookshelfPageModule {}
