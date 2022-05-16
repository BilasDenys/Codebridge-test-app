import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/fake-store-models';
import { SelectSingleProduct } from '../../store/actions/fake-store.actions';
import { Store } from '@ngrx/store';
import * as fromFakeStore from '../../store/reducers/fake-store.reducer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productProps: IProduct;
  @Input() searchTermProps: string;

  constructor(private store$: Store<fromFakeStore.IState>) { }

  ngOnInit(): void {
  }

  public selectProduct(id: number) {
    this.store$.dispatch(new SelectSingleProduct(id));
  }

}
