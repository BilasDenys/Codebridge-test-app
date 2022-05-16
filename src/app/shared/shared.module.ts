import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SearchProductPipe } from './pipes/search-product.pipe';

import { HighlightDirective } from './directives/highlight.directive';

import { SpinnerComponent } from './components/spinner/spinner.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    SearchProductPipe,
    HighlightDirective,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [ HttpClientModule, FormsModule, SearchProductPipe, HighlightDirective, SpinnerComponent ]
})
export class SharedModule { }
