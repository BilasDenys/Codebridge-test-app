import { Injectable } from '@angular/core';

import { FakeStoreService } from '../../services/fake-store.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of, delay } from 'rxjs';
import { FakeStoreActionTypes } from '../actions/fake-store.actions';
import { IProduct } from '../../models/fake-store-models';
import {
  FetchAllProductsSuccess,
  FetchAllProductsFail,
  FetchAllProducts,
  FetchSingleProductSuccess,
  FetchSingleProductFail,
  SelectSingleProduct
} from '../actions/fake-store.actions';

@Injectable()
export class FakeStoreEffects {
  constructor(
    private fakeStoreService: FakeStoreService,
    private actions$: Actions,
  ) {}

  fetchAllProducts = createEffect(() => this.actions$.pipe(
    ofType(FakeStoreActionTypes.FETCH_ALL_PRODUCTS),
    switchMap((action: FetchAllProducts) =>
      this.fakeStoreService.getAllProducts().pipe(
        map((products: IProduct[]) => {
         return new FetchAllProductsSuccess(products)
        }),
        catchError(error => of(new FetchAllProductsFail(error)))
      )
    )
  ))

  fetchSingleProduct = createEffect(() => this.actions$.pipe(
    ofType(FakeStoreActionTypes.SELECT_SINGLE_PRODUCT),
    switchMap(({ type, payload }: SelectSingleProduct) =>
      this.fakeStoreService.getSingleProduct(payload).pipe(
        map((product: IProduct) => {
          return new FetchSingleProductSuccess(product)
        }),
        catchError(error => of(new FetchSingleProductFail(error)))
      )
    )
  ))

}
