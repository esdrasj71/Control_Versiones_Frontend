import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Product_Category} from '../interfaces/product-category';
@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  
  API_ENDPOINT = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) {

   }
   getCategory() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token')});
    return this.httpClient.get(this.API_ENDPOINT + 'product_category', { headers: headers });
  }
  getCategoryId(id) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token')});
    return this.httpClient.get(this.API_ENDPOINT + 'product_category/' + id, {headers});
  }
  save(product_category: Product_Category){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token')});
    return this.httpClient.post(this.API_ENDPOINT + 'product_category', product_category, {headers: headers});
  }

  put(product_category) { 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token')});
    return this.httpClient.put(this.API_ENDPOINT + 'product_category/' + product_category.Product_Category_Id
      , product_category, { headers: headers }); 
  }

  delete(id){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token')});
    return this.httpClient.delete(this.API_ENDPOINT+ 'product_category/' + id,{headers:headers});
    } 
   
}
