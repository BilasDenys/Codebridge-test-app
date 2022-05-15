import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../feature/models/fake-store-models';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: IProduct[], searchString = '' ): IProduct[] {
    if( !searchString.trim() ) {
      return products;
    }
    else  {
      return products.filter((post: IProduct) => {
        return post.title.toLowerCase().includes(searchString.toLowerCase())
          || post.description.toLowerCase().includes(searchString.toLowerCase()) ;
      })
    }
  }

}
