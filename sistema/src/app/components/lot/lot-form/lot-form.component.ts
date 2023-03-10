import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LotService } from '../servicios/lot.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lot } from '../interfaces/lot';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../product/interfaces/product';
import { Router } from '@angular/router';
import { Inventory } from '../../inventory/interfaces/inventory';
import { InventoryService } from '../../inventory/servicios/inventory.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lot-form',
  templateUrl: './lot-form.component.html',
  styleUrls: ['./lot-form.component.css']
})
export class LotFormComponent implements OnInit {
  @Output() Lot_Id = new EventEmitter<number>();
  lot: Lot = {
    Lot_Id: null,
    Due_Date: null,
    Product_Id: null,
  };
  inventory: Inventory = {
    Stock: 0,
    Unit_Price: 0,
    Purchase_Price: 0,
    Lot_Id: null,
    Statuss: false,
  };
  API_ENDPOINT = 'http://localhost:3000/';
  //Update
  id: any;
  editing: boolean = false;
  selectedDueDate: Date;
  postarr: Lot[];
  products: Products[];
  selectedProductId: number;
  interval:any;
  constructor(private invetoryService: InventoryService, private lotService: LotService, private activatedRoute: ActivatedRoute, private router: Router, private httpClient: HttpClient) {

    
    this.id = this.activatedRoute.snapshot.params['id'];
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token') });

    if (this.id) {
      this.editing = true;
      this.httpClient.get(this.API_ENDPOINT + 'lot', { headers }).subscribe((data: Lot[]) => {
        this.postarr = data;
        //console.log(this.postarr);
        this.lot = this.postarr.find((m) => { return m.Lot_Id == this.id });
        this.selectedProductId = this.lot.Product_Id;
        this.selectedDueDate = this.lot.Due_Date;
      }, (error) => {
        console.log(error);
      });
    } else {
      this.editing = false;
    }

    
  }
  ngOnInit() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token') });
   this.interval=setInterval(() => {
      this.httpClient.get(this.API_ENDPOINT + 'productlot', { headers })
      .subscribe((data: Products[]) => {
        this.products = data;
      })
    }, 1000);
  }
  savePost() {
    if (this.editing) {
      this.lot.Product_Id = this.selectedProductId;
      this.lot.Due_Date = this.selectedDueDate;
      this.lotService.put(this.lot).subscribe((data) => { //El unico cambioes el put
        Swal.fire('Lote Actualizado', '', 'success');
      clearInterval(this.interval);
        //console.log(data)
      }, (error) => {
        //console.log(error);
        Swal.fire({ icon: 'error', title: 'Ocurrio un error', text: '' });
      });
    }
    else {
      this.lot.Product_Id = this.selectedProductId;
      this.lot.Due_Date = this.selectedDueDate;
      if (this.lot.Product_Id == null|| this.lot.Due_Date == null) {
        Swal.fire({ icon: 'warning', title: 'Aviso!', text: 'Debe llenar todos los campos' });
      }
      else {
        this.lotService.VerificarProduct(this.lot.Product_Id).subscribe((data)=>{
          let a= data['num']
          if(a ==-1)
          {
            this.lotService.save(this.lot).subscribe((data) => {
              Swal.fire('Lote Guardado', '', 'success');
              clearInterval(this.interval);
              //this.router.navigate(["/lot-home"]);
              this.Lot_Id.emit(data['id']);
              this.inventory.Lot_Id = data['id'];
              this.inventory.Statuss = true;
              this.invetoryService.save(this.inventory).subscribe((data) => {
                Swal.fire('Inventario Guardado', '', 'success');
                //console.log(data)
              });
    
            }, (error) => {
              //console.log(error);
              Swal.fire({ icon: 'error', title: 'Ocurrio un error', text: '' });
            });
          }else
          {
            this.lotService.save(this.lot).subscribe((data) => {
              Swal.fire('Lote Guardado', '', 'success');
              clearInterval(this.interval);
              //this.router.navigate(["/lot-home"]);
              this.Lot_Id.emit(data['id']);
              this.inventory.Lot_Id = data['id'];
              this.inventory.Statuss = false;
              this.invetoryService.save(this.inventory).subscribe((data) => {
                Swal.fire('Inventario Guardado', '', 'success');
                //console.log(data)
              });
    
            }, (error) => {
              //console.log(error);
              Swal.fire({ icon: 'error', title: 'Ocurrio un error', text: '' });
            });
          }
        })
        
       
      }
    }
  }
  searchProduct(filter: string, product) {
    filter = filter.toLocaleLowerCase();
    return (product.Complete.toLocaleLowerCase().indexOf(filter) > -1);
  }
}
