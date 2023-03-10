import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root' 
})
export class EmployeeService {

  API_ENDPOINT = 'http://localhost:3000/';

  employee = [];
  filtradoEmpleados: '';
  constructor(private httpClient: HttpClient) {

  }

getEmployee() {
  const headers = new HttpHeaders({'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token')});
  return this.httpClient.get(this.API_ENDPOINT + 'employee', {headers});
}
   save(employee: Employee){
     //console.log(employee);
     const headers = new HttpHeaders({'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token')});
     return this.httpClient.post(this.API_ENDPOINT + 'employee', employee, {headers: headers});
   }
   put(employee) { //Le llamaremos put para fines practicos
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token')});
    return this.httpClient.put(this.API_ENDPOINT + 'employee/' + employee.Employee_Id, employee,{ headers: headers }); 

  }
  delete(id) {
     const headers = new HttpHeaders({'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token')});
    return this.httpClient.delete(this.API_ENDPOINT + 'employee/' + id, { headers: headers });
  }

  findEmployee(id) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'accesstoken': localStorage.getItem('token')});
    return this.httpClient.get(this.API_ENDPOINT + 'Employee/'+ id ,{ headers: headers })
  }
}
