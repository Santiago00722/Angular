import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TarjetaService {
  constructor(private _http: HttpClient) {}

  addTarjeta(data: any): Observable<any> {
    //return this._http.post('http://192.168.1.44:4000/tarj', data);
    return this._http.post('http://192.168.1.145:3000/tarjetas', data);
  }

  updateTarjeta(id: number, data: any): Observable<any> {
    //return this._http.put('http://192.168.1.44:4000/tarj/${id}', data);
    return this._http.put('http://192.168.1.145:3000/tarjetas/' + id, data);
  }

  getTarjetaList(): Observable<any> {
    //return this._http.get('http://192.168.1.44:4000/api/tarj');
    return this._http.get('http://192.168.1.145:3000/tarjetas');
    //return this._http.get('http://192.168.1.44:8000/api/tarjetas/');
  }

  getTarjeta(id: number): Observable<any> {
    //return this._http.get('http://192.168.1.44:4000/api/tarj');
    return this._http.get('http://192.168.1.145:3000/tarjetas?id=' + id);
    //return this._http.get('http://192.168.1.145:3000/tarjetas/' + id);
    //return this._http.get('http://192.168.1.44:8000/api/tarjetas/' + id);    
  }

  deleteTarjeta(id: number): Observable<any> { 
    console.log(id);   
    //return this._http.delete('http://192.168.1.44:4000/tarj/${id}');
    return this._http.delete('http://192.168.1.145:3000/tarjetas' + id );    
  }
}
