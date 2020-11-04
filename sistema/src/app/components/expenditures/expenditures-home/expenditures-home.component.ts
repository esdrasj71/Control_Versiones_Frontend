import { Component, OnInit } from '@angular/core';
import { ExpendituresService } from '../servicios/expenditures.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expenditures } from '../interfaces/expenditures';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-expenditures-home',
  templateUrl: './expenditures-home.component.html',
  styleUrls: ['./expenditures-home.component.css']
})
export class ExpendituresHomeComponent implements OnInit {

  API_ENDPOINT = 'http://localhost:3000/';
  expenditures: Expenditures[];
  constructor(private expendituresService: ExpendituresService, private httpClient: HttpClient) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token') });
    httpClient.get(this.API_ENDPOINT + 'expenditures', { headers })
      .subscribe((data: Expenditures[]) => {
        this.expenditures = data;
      })
   }
  searchTermExpenditures = '';
  ngOnInit(){
  }
  delete(id) {
    this.expendituresService.delete(id).subscribe(
      (data) => {
        Swal.fire('Egreso Eliminado', '','success');
        window.setTimeout(function(){location.reload()},2000)
      },
      (error) => {
        console.log(error);
        Swal.fire({icon: 'error', title: 'Ocurrio un error', text: ''})
      }
    );
  }

}
