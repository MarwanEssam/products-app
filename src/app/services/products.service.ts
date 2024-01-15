import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductType } from '../product-type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }
  getSingleProduct(id: number): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
