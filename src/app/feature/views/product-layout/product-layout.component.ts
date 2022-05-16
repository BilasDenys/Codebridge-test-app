import { Component, OnDestroy, OnInit } from '@angular/core';
import * as fromFakeStore from '../../store/reducers/fake-store.reducer';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from '../../models/fake-store-models';
import {
  getErrorSelector,
  getIsLoadingSelector,
  getSingleProductSelector
} from '../../store/selectors/fake-store.selector';
import { SelectSingleProduct, UnselectSingleProduct } from '../../store/actions/fake-store.actions';
import { ActivatedRoute, Params } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss']
})
export class ProductLayoutComponent implements OnInit, OnDestroy {

  public product$: Observable<IProduct | null>;
  public isLoading$: Observable<boolean>;
  public errorMessage$: Observable<string>

  constructor(
    private store$: Store<fromFakeStore.IState>,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.params.pipe(
      untilDestroyed(this))
      .subscribe((params: Params) => {
        params['id'] ? this.store$.dispatch(new SelectSingleProduct(params['id'])) : null
      });
    this.isLoading$ = this.store$.pipe(select(getIsLoadingSelector));
    this.product$ = this.store$.pipe(select(getSingleProductSelector));
    this.errorMessage$ = this.store$.pipe(select(getErrorSelector))
  }

  ngOnDestroy() {
    this.store$.dispatch(new UnselectSingleProduct());
  }


}
