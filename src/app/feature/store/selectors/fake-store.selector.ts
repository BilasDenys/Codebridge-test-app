import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProduct } from '../../models/fake-store-models';
import * as fromFakeStore from '../reducers/fake-store.reducer';

const fakeStoreFeatureSelector = createFeatureSelector<any, any>('fakeStore');

export const getIsLoadingSelector = createSelector(
  fakeStoreFeatureSelector,
  (state: fromFakeStore.IState): boolean => state.isLoading
);

export const getAllProductsSelector = createSelector(
  fakeStoreFeatureSelector,
  (state: fromFakeStore.IState): IProduct[] => state.allProducts
)

export const getSingleProductSelector = createSelector(
  fakeStoreFeatureSelector,
  (state: fromFakeStore.IState): IProduct | null => state.singleProduct
)

export const getErrorSelector = createSelector(
  fakeStoreFeatureSelector,
  (state: fromFakeStore.IState): any => state.singleProduct
)
