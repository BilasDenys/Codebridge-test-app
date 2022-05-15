import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchProductPipe } from './pipes/search-product.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    SearchProductPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [HttpClientModule, FormsModule, SearchProductPipe, HighlightDirective]
})
export class SharedModule { }
