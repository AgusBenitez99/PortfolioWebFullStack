import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:4200/api'; //la url que corresponda
  token;
  constructor(private http: HttpClient, private router: Router) {}
  login(email: string, password: string) {
    this.http
      .post(this.url + '/authenticate', { email: email, password: password })
      .subscribe((resp: any) => {
        //redireccionamos el usuario a su perfil
        this.router.navigate(['profile']);
        //guardamos el token en localstore
        localStorage.setItem('auth_token', resp.token);
      });
  }
  //para cerrar la seson eliminamos el token del localStorage
  logout() {
    localStorage.removeItem('token');
  }
  //un servicio para verificar si existe la sesion
  public get logIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
