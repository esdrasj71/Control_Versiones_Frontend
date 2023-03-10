import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lot } from '../interfaces/lot';
import { Procedure_SaveProduct } from '../../product/interfaces/procedure_saveproduct';
@Injectable({
  providedIn: 'root'
})
export class LotService {

  API_ENDPOINT = 'http://localhost:3000/';
  lot = [];
  constructor(private httpClient: HttpClient) {
    httpClient.get(this.API_ENDPOINT + 'lot')
      .subscribe((data: Lot[]) => {
        this.lot = data;
      });
  }

  VerificarProduct(id) {
    const headers = new HttpHeaders({ 'ContentType': 'application/json','accesstoken':localStorage.getItem('token') });

    return this.httpClient.get(this.API_ENDPOINT + 'lote/'+id,{headers});
  }
  getLot() {
    const headers = new HttpHeaders({ 'ContentType': 'application/json','accesstoken':localStorage.getItem('token') });

    return this.httpClient.get(this.API_ENDPOINT + 'lot',{headers});
  }
  saveprocedure(procedure_product: Procedure_SaveProduct) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.API_ENDPOINT + 'procedure_product', procedure_product, { headers: headers });
  }
  save(lot: Lot) {
    //console.log(lot);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accesstoken':localStorage.getItem('token') });
    return this.httpClient.post(this.API_ENDPOINT + 'lot', lot, { headers: headers });
  }
  put(lot) { //Le llamaremos put para fines practicos
    const headers = new HttpHeaders({ 'ContentType': 'application/json','accesstoken':localStorage.getItem('token') });
    return this.httpClient.put(this.API_ENDPOINT + 'lot/' + lot.Lot_Id, lot, { headers: headers });
  }

  delete(id) {
    const headers = new HttpHeaders({ 'ContentType': 'application/json','accesstoken':localStorage.getItem('token') });
    return this.httpClient.delete(this.API_ENDPOINT + 'lot/' + id, { headers: headers });
  }

  findPresentation(id) {
    const headers = new HttpHeaders({ 'ContentType': 'application/json','accesstoken':localStorage.getItem('token') });

    return this.httpClient.get(this.API_ENDPOINT + 'lot/' + id,{headers});
  }
}
