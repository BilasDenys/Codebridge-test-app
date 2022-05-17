import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/fake-store-models';
import { SelectSingleProduct, SetLengthOfSearchProducts } from '../../store/actions/fake-store.actions';
import { Store } from '@ngrx/store';
import * as fromFakeStore from '../../store/reducers/fake-store.reducer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() productProps: IProduct;
  @Input() searchTermProps: string;
  @Input() resultProps: any;

  constructor(private store$: Store<fromFakeStore.IState>) { }

  ngOnChanges(changes: SimpleChanges): void {
    if ( changes ) {
      this.searchTermProps.trim().length === 0 ?
        this.store$.dispatch(new SetLengthOfSearchProducts(0))
        :
        this.store$.dispatch(new SetLengthOfSearchProducts(this.resultProps));
    }
  }

  ngOnInit(): void {
  }

  public selectProduct(id: number) {
    this.store$.dispatch(new SelectSingleProduct(id));
  }

}
