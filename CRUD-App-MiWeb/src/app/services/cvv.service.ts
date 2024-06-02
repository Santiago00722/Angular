import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvvService {

  constructor(private _http: HttpClient) { }

  addCvv(data: any): Observable<any> {
    return this._http.post('http://192.168.1.145:3000/cvv', data);
  }

  updateCvv(id: number, data: any): Observable<any> {
    return this._http.put('http://192.168.1.145:3000/cvv/' + id, data);
  }

  getCvvList(): Observable<any> {
    return this._http.get('http://192.168.1.145:3000/cvv');
    
  }

  getCvv(id: number): Observable<any> {
    return this._http.get('http://192.168.1.145:3000/cvv?id=' + id);
    
  }

  deleteCvv(id: number): Observable<any> { 
    //console.log(id);   
    return this._http.delete('http://192.168.1.145:3000/cvv/' + id );    
  }
}
