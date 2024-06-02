import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CavvService {

  constructor(private _http: HttpClient) { }

  addCavv(data: any): Observable<any> {
    return this._http.post('http://192.168.1.145:3000/cavv', data);
  }

  updateCavv(id: number, data: any): Observable<any> {
    return this._http.put('http://192.168.1.145:3000/cavv/' + id, data);
  }

  getCavvList(): Observable<any> {
    return this._http.get('http://192.168.1.145:3000/cavv');
  
  }

  getCavv(id: number): Observable<any> {
    return this._http.get('http://192.168.1.145:3000/cavv?id=' + id);
  
  }

  deleteCavv(id: number): Observable<any> { 
    //console.log(id);   
    return this._http.delete('http://192.168.1.145:3000/cavv/' + id );    
  }
}