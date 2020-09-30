import { Component, OnInit } from '@angular/core';
import { Product_Category } from '../interfaces/product-category';
import { ProductCategoryService } from '../servicios/product-category.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-category-form',
  templateUrl: './product-category-form.component.html',
  styleUrls: ['./product-category-form.component.css']
})
export class ProductCategoryFormComponent implements OnInit {
  product_category: Product_Category = {
    Product_Category_Id: null,
    Name: null,
  };
  API_ENDPOINT = 'http://localhost:3000/';
  id: any;
  editing: boolean = false; //Este campo ayuda a saber cuando estamos editando y cuando estamos ingresando
  postarr: Product_Category[]; //Este campo nos ayudara a traer los datos cuando queremos editar
  constructor(private productcategoryService: ProductCategoryService, private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    this.id = this.activatedRoute.snapshot.params['id']; //Este es el parametro que se definio en la ruta de app.module.ts
    if (this.id) {
      this.editing = true;
      this.httpClient.get(this.API_ENDPOINT + 'product_category').subscribe((data: Product_Category[]) => { //Aqui traemos el arreglo completo de datos
        this.postarr = data;
        console.log(this.postarr);
        this.product_category = this.postarr.find((m) => { return m.Product_Category_Id == this.id }); //Aqui traemos solo el id que nos interesa
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
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      });
    }
  }
}