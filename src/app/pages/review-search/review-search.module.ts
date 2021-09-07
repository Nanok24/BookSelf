import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FilterPipe } from '../../pipes/filter.pipe';

import { ReviewSearchPageRoutingModule } from './review-search-routing.module';

import { ReviewSearchPage } from './review-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewSearchPageRoutingModule
  ],
  declarations: [ReviewSearchPage, FilterPipe]
})
export class ReviewSearchPageModule {}
