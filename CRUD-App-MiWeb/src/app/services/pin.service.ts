import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PinService {

  constructor(private _http: HttpClient) {}

  addPin(data: any): Observable<any> {
    return this._http.post('http://192.168.1.145:3000/pin', data);
  }

  updatePin(id: number, data: any): Observable<any> {
    return this._http.put('http://192.168.1.145:3000/pin/' + id, data);
  }

  getPinList(): Observable<any> {
    return this._http.get('http://192.168.1.145:3000/pin');    
  }

  getPin(id: number): Observable<any> {
    return this._http.get('http://192.168.1.145:3000/pin?id=' + id);    
  }

  deletePin(id: number): Observable<any> { 
    console.log(id);   
    return this._http.delete('http://192.168.1.145:3000/pin/' + id );    
  }
}
