import { Action } from '@ngrx/store';
import { IProduct } from '../../models/fake-store-models';

export enum FakeStoreActionTypes {

  FETCH_ALL_PRODUCTS = '[FakeStoreAPI] Fetch All Products',
  FETCH_ALL_PRODUCTS_SUCCESS = '[FakeStoreAPI] Fetch All Products SUCCESS',
  FETCH_ALL_PRODUCTS_FAIL = '[FakeStoreAPI] Fetch All Products FAIL',

  SELECT_SINGLE_PRODUCT = '[FakeStoreAPI] Fetch Single Product',
  UNSELECT_SINGLE_PRODUCT = '[FakeStoreAPI] Unselect Product ',
  FETCH_SINGLE_PRODUCT_SUCCESS = '[FakeStoreAPI] Fetch Single Product SUCCESS',
  FETCH_SINGLE_PRODUCT_FAIL = '[FakeStoreAPI] Fetch Single Product FAIL',

}

export class FetchAllProducts implements  Action {
  readonly type =  FakeStoreActionTypes.FETCH_ALL_PRODUCTS;
}

export class FetchAllProductsSuccess implements  Action {
  readonly type =  FakeStoreActionTypes.FETCH_ALL_PRODUCTS_SUCCESS;
  constructor(public payload: IProduct[]) {}
}

export class FetchAllProductsFail implements  Action {
  readonly type =  FakeStoreActionTypes.FETCH_ALL_PRODUCTS_FAIL;
  constructor(public payload: any) {}
}

export class SelectSingleProduct implements  Action {
  readonly type =  FakeStoreActionTypes.SELECT_SINGLE_PRODUCT;
  constructor(public payload: number) {}
}

export class UnselectSingleProduct implements Action {
  readonly type = FakeStoreActionTypes.UNSELECT_SINGLE_PRODUCT;
}

export class FetchSingleProductSuccess implements  Action {
  readonly type =  FakeStoreActionTypes.FETCH_SINGLE_PRODUCT_SUCCESS;
  constructor(public payload: IProduct) {}
}

export class FetchSingleProductFail implements  Action {
  readonly type =  FakeStoreActionTypes.FETCH_SINGLE_PRODUCT_FAIL;
  constructor(public payload: any) {}
}


export type FakeStoreActions = FetchAllProducts |
  FetchAllProductsSuccess
  | FetchAllProductsFail
  | SelectSingleProduct
  | UnselectSingleProduct
  | FetchSingleProductSuccess
  | FetchSingleProductFail;
