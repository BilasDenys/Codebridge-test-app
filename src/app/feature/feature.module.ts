import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './views/main-layout/main-layout.component';
import { HomeLayoutComponent } from './views/home-layout/home-layout.component';
import { ProductLayoutComponent } from './views/product-layout/product-layout.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';

import * as fromFakeStore from './store/reducers/fake-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { fakeStoreEffects } from './store';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomeLayoutComponent },
      { path: 'product/:id', component: ProductLayoutComponent },
      { path: '**', component: PageNotFoundComponent }
    ]}
]

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeLayoutComponent,
    ProductLayoutComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('fakeStore', fromFakeStore.reducer),
    EffectsModule.forFeature(fakeStoreEffects)
  ],
  exports: [RouterModule]
})
export class FeatureModule { }
