import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/fake-store-models';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products');
  }

  public getSingleProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`https://fakestoreapi.com/products/${ id }`);
  }

}
