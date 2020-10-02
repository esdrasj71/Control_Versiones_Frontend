import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inventory } from '../interfaces/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  API_ENDPOINT = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) {
  }

  save(inventory: Inventory) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.API_ENDPOINT + 'inventory', inventory, { headers: headers });
  }

  put(inventory) { 
    const headers = new HttpHeaders({ 'ContentType': 'application/json' }); 
    return this.httpClient.put(this.API_ENDPOINT + 'inventory/' + inventory.Inventory_Id
      , inventory, { headers: headers }); 
  }

  delete(id) {
    const headers = new HttpHeaders({ 'ContentType': 'application/json' });
    return this.httpClient.delete(this.API_ENDPOINT + 'inventory/' + id, { headers: headers });
  } 

  getInventory() {
    return this.httpClient.get(this.API_ENDPOINT + 'inventory');
  }
  getInventoryId(id) {
    return this.httpClient.get(this.API_ENDPOINT + 'inventory/' + id);
  }
}