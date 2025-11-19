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
 funGuardar (registro:any){
  return this.http.post(`${this.baseUrl}/categoria`,registro)
 }
 funModificar (id:number,registro:any){
  return this.http.patch(`${this.baseUrl}/categoria/${id}`,registro)
 }
 funEliminar (id:number){
  return this.http.delete(`${this.baseUrl}/categoria/${id}`)
 }
}
