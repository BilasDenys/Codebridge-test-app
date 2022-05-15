import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FakeStoreService } from '../../services/fake-store.service';
import * as fromFakeStore from '../../store/reducers/fake-store.reducer'
import { select, Store } from '@ngrx/store';
import { getAllProductsSelector, getIsLoadingSelector } from '../../store/selectors/fake-store.selector';
import { FetchAllProducts } from '../../store/actions/fake-store.actions';
import { IProduct } from '../../models/fake-store-models';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  Observable,
  Subscribable,
  Subscription
} from 'rxjs';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit, OnDestroy {

  @ViewChild('control') controlFromTemplate: ElementRef<HTMLInputElement>;

  controlValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  allProducts: IProduct[] ;
  isLoading$: Observable<boolean>;
  sub$: Subscription;
  searchString = '';

  constructor(
    private fakeService: FakeStoreService,
    private store$: Store<fromFakeStore.IState>,
    ) {
  }

  ngOnInit(): void {
    this.store$.dispatch(new FetchAllProducts());

    this.isLoading$ = this.store$.pipe(select(getIsLoadingSelector))

    this.store$.pipe(select(getAllProductsSelector)).subscribe((allProduct: IProduct[]) => {
      this.allProducts = allProduct;
    });
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

}

