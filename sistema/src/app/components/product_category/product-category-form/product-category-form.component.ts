import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { Product_Category } from '../interfaces/product-category';
import { ProductCategoryService } from '../servicios/product-category.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product-category-form',
  templateUrl: './product-category-form.component.html',
  styleUrls: ['./product-category-form.component.css']
})
export class ProductCategoryFormComponent implements OnInit {
  @Output() Category_Id = new EventEmitter<number>();
  product_category: Product_Category = {
    Product_Category_Id: null,
    Name: null,
  };
  API_ENDPOINT = 'http://localhost:3000/';
  id: any;
  editing: boolean = false; 
  postarr: Product_Category[]; 
  constructor(private productcategoryService: ProductCategoryService, private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    const headers = new HttpHeaders({ 'ContentType': 'application/json', 'accesstoken': localStorage.getItem('token') });   
    this.id = this.activatedRoute.snapshot.params['id']; 
    if (this.id) {
      this.editing = true;
      this.httpClient.get(this.API_ENDPOINT + 'prooduct_category', { headers }).subscribe((data: Product_Category[]) => {
        this.postarr = data;
        console.log(this.postarr);
        this.product_category = this.postarr.find((m) => { return m.Product_Category_Id == this.id }); 
      }, (error) => {
        console.log(error);
      });
    }
    else {
      this.editing = false;
    }
  }
  ngOnInit() {
  }
  saveProductCategory() {
    if (this.editing) {
      this.productcategoryService.put(this.product_category).subscribe((data) => {
        alert('Categoria de producto actualizada');
        console.log(data)
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      });
    }
    else {
      console.log(this.product_category);
      this.productcategoryService.save(this.product_category).subscribe((data) => {
        alert('Categoria de producto guardada');
        console.log(data)
        this.Category_Id.emit(data['id']);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      });
    }
  }
}