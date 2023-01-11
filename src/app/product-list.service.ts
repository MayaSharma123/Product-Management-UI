import { HttpClient } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private apiUrl = 'http://localhost:8080/viewProduct';
  private products: Product[] = [];

  constructor(private http : HttpClient){}
   

  getProductList(): Observable<Product[]>{
   // return this._http.get<Product[]>("http://localhost:8080/viewProduct")
    return this.http.get<Product[]>(this.apiUrl)
  // return this._http.get(this.apiUrl);
   

}
 
}