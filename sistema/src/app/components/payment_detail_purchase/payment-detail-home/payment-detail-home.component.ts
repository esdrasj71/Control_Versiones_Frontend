import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../servicios/payment-detail.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaymentDetail } from '../interfaces/payment-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-detail-home',
  templateUrl: './payment-detail-home.component.html',
  styleUrls: ['./payment-detail-home.component.css']
})
export class PaymentDetailHomeComponent implements OnInit {

  API_ENDPOINT = 'http://localhost:3000/';
  paymentDetail: PaymentDetail[];
  constructor( private paymentService: PaymentDetailService,private httpClient: HttpClient,private router: Router) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token') });
    httpClient.get(this.API_ENDPOINT + 'payment_detail_purchase', { headers })
      .subscribe((data: PaymentDetail[]) => {
        this.paymentDetail = data; 
      });
  }
  ngOnInit() {}
  delete(id) {
    this.paymentService.delete(id).subscribe(
      (data) => {
        alert('Detalle de pago compra Eliminado');
        this.router.navigate(['/home']);
        this.router.navigate(["/payment-detail-purchase-home"]);
      },
      (error) => {
        console.log(error);
      }
    );
}
}
  