import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

 private baseUrl = environment.apiUrl;
 private http=inject(HttpClient)

 funlistar(){
  return this.http.get(`${this.baseUrl}/categoria`);
 }
}
