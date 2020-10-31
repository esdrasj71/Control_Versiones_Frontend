import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../servicios/customers.service';
import {HttpClient} from '@angular/common/http';
import {Customers} from '../interfaces/customer';

@Component({
  selector: 'app-customers-home',
  templateUrl: './customers-home.component.html',
  styleUrls: ['./customers-home.component.css']
})
export class CustomersHomeComponent implements OnInit {
  API_ENDPOINT = 'http://localhost:3000/';
  customers: Customers[];
  
  constructor(private customersService: CustomersService, private httpClient: HttpClient) {
    this.customersService.getCustomer()
    .subscribe((data: Customers[])=>{
      this.customers = data;
      console.log(this.customers);
      });
   }

  searchTerm5= '';

  ngOnInit() {}
  delete(id) {
    this.customersService.delete(id).subscribe(
      (data) => {
        alert('Cliente Eliminado');
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
