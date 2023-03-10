import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../servicios/brands.service';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Brands } from '../interfaces/brand';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-brand-home',
  templateUrl: './brand-home.component.html',
  styleUrls: ['./brand-home.component.css']
})
export class BrandHomeComponent implements OnInit {
  API_ENDPOINT = 'http://localhost:3000/';
  brands: Brands[];
  constructor(private brandsService: BrandsService, private httpClient: HttpClient) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token') });
    httpClient.get(this.API_ENDPOINT + 'brands', { headers })
      .subscribe((data: Brands[]) => {
        this.brands = data;
      })
  }

  searchTerm4 = '';

  ngOnInit(): void {
  }

    delete(id) {
      this.brandsService.delete(id).subscribe(
        (data) => {
          Swal.fire('Marca Eliminada', '','success');
        },
        (error) => {
          console.log(error);
          Swal.fire({icon: 'error', title: 'Ocurrio un error', text: ''})
        }
      );
    } 

}
