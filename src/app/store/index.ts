
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromFakeStore from '../feature/store/reducers/fake-store.reducer';

export interface IAppStore {
  fakeStore: fromFakeStore.IState;
}

const reducers: ActionReducerMap<any, any> = { fakeStore: fromFakeStore.reducer };

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['fakeStore'], rehydrate: true })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
