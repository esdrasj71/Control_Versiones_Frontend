import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../servicios/providers.service';
import { Providers } from '../interfaces/providers';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-providers-home',
  templateUrl: './providers-home.component.html',
  styleUrls: ['./providers-home.component.css'],
})
export class ProvidersHomeComponent implements OnInit {
  API_ENDPOINT = 'http://localhost:3000/';
  providers: Providers[];

  constructor(
    private providersService: ProvidersService, private router: Router,private httpClient: HttpClient) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token') });
      httpClient.get(this.API_ENDPOINT + 'providers', { headers })
    .subscribe((data: Providers[]) => {
      this.providers = data;
    });;
   /* httpClient.get(this.API_ENDPOINT + 'providers',{headers:headers})
      .subscribe((data: Providers[]) => {
        this.providers = data; 
      });*/
  }

searchTerm3 = '';

  ngOnInit() {}
  delete(id) {
    this.providersService.delete(id).subscribe(
      (data) => {
        Swal.fire('Proveedor Eliminado', '','success');
        //window.setTimeout(function(){location.reload()},1500)
      },
      (error) => {
        console.log(error);
        Swal.fire({icon: 'error', title: 'Ocurrio un error', text: ''})
      }
    );
  }
  
}
