import { IProduct } from '../../models/fake-store-models';
import { FakeStoreActions, FakeStoreActionTypes } from '../actions/fake-store.actions';

export interface IState {
  isLoading: boolean,
  allProducts: IProduct[],
  singleProduct: IProduct | null,
  error: any
}

const initialState: IState = {
  isLoading: false,
  allProducts: [],
  singleProduct: null,
  error: ''
}

export const reducer = (state = initialState, action: FakeStoreActions) => {
    switch(action.type) {

      case FakeStoreActionTypes.FETCH_ALL_PRODUCTS:
        return { ...state, isLoading: true }

      case FakeStoreActionTypes.FETCH_ALL_PRODUCTS_SUCCESS:
        return { ...state, isLoading: false, allProducts: action.payload }

      case FakeStoreActionTypes.FETCH_ALL_PRODUCTS_FAIL:
        return { ...state, isLoading: false, error: action.payload }

      case FakeStoreActionTypes.SELECT_SINGLE_PRODUCT:
        return { ...state, isLoading: true }

      case FakeStoreActionTypes.UNSELECT_SINGLE_PRODUCT:
        return { ...state, singleProduct: null }

      case FakeStoreActionTypes.FETCH_SINGLE_PRODUCT_SUCCESS:
        return { ...state, isLoading: false, singleProduct: action.payload }

      case FakeStoreActionTypes.FETCH_SINGLE_PRODUCT_FAIL:
        return { ...state, isLoading: false, error: action.payload }

      default:
        return state
    }
}

