import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl="http://jsonplaceholder.typicode.com"
  private http=inject(HttpClient)

 constructor() { }
 loginConNest(crdenciales:any){
  return this.http.get<any>("${this.baseUrl}/todos");
}

registroConNest(datos:any){
  return this.http.post<any>("${this.baseUrl}/register", datos);
}
}
