import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl=environment.apiUrl;
  private http=inject(HttpClient)

 constructor() { }
 loginConNest(crdenciales:any){
  return this.http.post<any>(`${this.baseUrl}/auth/login`,crdenciales);

}

registroConNest(datos:any){
  return this.http.post<any>("${this.baseUrl}/register", datos);
}
}
