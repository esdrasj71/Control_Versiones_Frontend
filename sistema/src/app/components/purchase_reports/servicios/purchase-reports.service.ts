import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PurchaseReport1 } from '../interfaces/report1';

@Injectable({
  providedIn: 'root'
})
export class PurchaseReportsService {

  API_ENDPOINT = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) {

  }
  showreport1(purchase_report1: PurchaseReport1) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token')});
    return this.httpClient.post(this.API_ENDPOINT + 'purchase_report1', purchase_report1, { headers: headers });
  }
}
