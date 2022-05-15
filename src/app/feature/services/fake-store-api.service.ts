import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreApiService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get<any>('https://fakestoreapi.com/products');
  }

  getSingleProduct(id: number): Observable<any> {
    return this.http.get<any>(`https://fakestoreapi.com/products/${ id }`);
  }

}
