import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login, UserResponse } from '../interface/login';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  API_ENDPOINT = 'http://localhost:3000/';
  login: Login[];
  checklogin=false;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.checkToken();
  }
  

  save(login: Login): Observable<Login | void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient
      .post(this.API_ENDPOINT + 'login', login)
      .pipe(
        map((user: UserResponse) => {
          if(user.message=='El usuario o contraseña son incorrectos')
          {
            Swal.fire({icon: 'error', title: 'No Valido', text: 'El usuario o contraseña son incorrectos'})
            window.setTimeout(function(){this.router.navigate(['/home'])},1300)
          }else
          {
            //alert('Bienvenido al sistema');
          localStorage.setItem('canact','true');
          localStorage.setItem('usuario',user.Username);
          localStorage.setItem('Rol',user.Usertype.toString());
          localStorage.setItem('EmpleadoId',user.Employee_Id.toString());
          this.saveToken(user.Token.replace("","")); 
          this.router.navigate(['/serie-form']);
          return user;      
          }
        }));
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('canact');
    localStorage.removeItem('usuario');
    localStorage.removeItem('Rol');
    localStorage.removeItem('EmpleadoId');
    localStorage.removeItem('serie');
    this.router.navigate(['/login']);
  }

   checkToken(){
    const userToken = localStorage.getItem('token');
    if(userToken=='0')
    {
      localStorage.removeItem('token');
    }else{

    
    const isExpired = helper.isTokenExpired(userToken);
    if(isExpired){
      this.logout();
    }else
      this.checklogin=true;
  }
    //console.log('Expiro: ', isExpired);
  }
  private saveToken(token:string): void {
    //console.log(token);
    localStorage.setItem('token',token);
  }


}
